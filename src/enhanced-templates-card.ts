/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  LitElement,
  html,
  customElement,
  property,
  CSSResult,
  TemplateResult,
  css,
  internalProperty,
} from 'lit-element';
import { HomeAssistant, LovelaceCard, LovelaceCardEditor, getLovelace } from 'custom-card-helpers';
import { Connection, createCollection } from 'home-assistant-js-websocket';
import { Store } from 'home-assistant-js-websocket/dist/store';

import './editor';

import type {
  AreaRegistryEntry,
  EnhancedArea,
  EnhancedEntity,
  EnhancedPerson,
  EnhancedTemplatesCardConfig,
  EnhancedTemplatesConfigChangedEvent,
  HaPartialCustomElement,
} from './types';
import { CARD_VERSION, DEFAULT_AREA_ICON, DEFAULT_SORT_ORDER } from './const';
import { localize } from './localize/localize';

/* eslint no-console: 0 */
console.info(
  `%c  ENHANCED-TEMPLATES-CARD  \n%c  ${localize('common.version')} ${CARD_VERSION}            `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

// This puts your card into the UI card picker dialog
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'enhanced-templates-card',
  name: 'Enhanced Templates Settings Card',
  description: 'Update areas or entities with custom settings.',
});

const _ha_entity_picker = async () => {
  if (customElements.get('ha-entity-picker')) return;

  await customElements.whenDefined('partial-panel-resolver');
  const ppr = document.createElement('partial-panel-resolver') as HaPartialCustomElement;
  ppr.hass = {
    panels: [{ url_path: 'tmp', component_name: 'developer-tools' }],
  };
  ppr._updateRoutes();

  await ppr.routerOptions.routes.tmp.load();

  await customElements.whenDefined('developer-tools-router');
  const dtr = document.createElement('developer-tools-router') as HaPartialCustomElement;
  await dtr.routerOptions.routes.state.load();
};

const fetchAreaRegistry = (conn: Connection) =>
  conn
    .sendMessagePromise({
      type: 'config/area_registry/list',
    })
    .then((areas) =>
      (areas as AreaRegistryEntry[]).sort((entry_a, entry_b) => {
        if (entry_a.name > entry_b.name) return 1;
        if (entry_a.name < entry_b.name) return -1;
        return 0;
      }),
    );

const debounce = <T extends (...args) => unknown>(func: T, wait, immediate = false): T => {
  let timeout;
  // @ts-ignore
  return function (...args) {
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;
    const later = () => {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
};

const subscribeAreaRegistryUpdates = (conn: Connection, store: Store<AreaRegistryEntry[]>) =>
  conn.subscribeEvents(
    debounce(
      () => fetchAreaRegistry(conn).then((areas: AreaRegistryEntry[]) => store.setState(areas, true)),
      500,
      true,
    ),
    'area_registry_updated',
  );

const subscribeAreaRegistry = (conn: Connection, onChange: (areas: AreaRegistryEntry[]) => void) =>
  createCollection<AreaRegistryEntry[]>(
    '_areaRegistry',
    fetchAreaRegistry,
    subscribeAreaRegistryUpdates,
    conn,
    onChange,
  );

const _config_elements = async () => {
  if (customElements.get('ha-area-picker')) return;

  await customElements.whenDefined('partial-panel-resolver');
  const ppr = document.createElement('partial-panel-resolver') as HaPartialCustomElement;
  ppr.hass = { panels: [{ url_path: 'tmp', component_name: 'config' }] };
  ppr._updateRoutes();

  await ppr.routerOptions.routes.tmp.load();

  await customElements.whenDefined('ha-panel-config');
  const pc = document.createElement('ha-panel-config') as HaPartialCustomElement;

  await pc.routerOptions.routes.devices.load();
  await customElements.whenDefined('ha-config-devices');
  const cd = document.createElement('ha-config-devices') as HaPartialCustomElement;
  cd.firstUpdated({});

  // await cd.routerOptions.routes.device.load();
  await customElements.whenDefined('ha-config-device-page');
  const cdp = document.createElement('ha-config-device-page') as HaPartialCustomElement;
  cdp.firstUpdated({});

  await customElements.whenDefined('dialog-device-registry-detail');
  const drd = document.createElement('dialog-device-registry-detail') as HaPartialCustomElement;
  // cdp.firstUpdated({});
  (drd as any).render();

  await pc.routerOptions.routes.entities.load();
  await customElements.whenDefined('ha-config-entities');
  const ce = document.createElement('ha-config-entities') as HaPartialCustomElement;
  ce.firstUpdated({});

  await customElements.whenDefined('ha-area-picker');
  const ap = document.createElement('ha-area-picker');
};

@customElement('enhanced-templates-card')
export class EnhancedTemplateCard extends LitElement implements LovelaceCard {
  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    return document.createElement('enhanced-templates-card-editor') as LovelaceCardEditor;
  }

  public static getStubConfig(): object {
    return {};
  }

  // TODO Add any properties that should cause your element to re-render here
  // https://lit-element.polymer-project.org/guide/properties
  @property({ attribute: false }) public _hass!: HomeAssistant;
  @internalProperty() private config!: EnhancedTemplatesCardConfig;
  @internalProperty() private _areas?: AreaRegistryEntry[];
  @internalProperty() private _area_id?: string;
  @internalProperty() private _entity_type?: string;
  @internalProperty() private _entity_types?: Array<string>;
  @internalProperty() private _icon?: string;
  @internalProperty() private _name?: string;
  @internalProperty() private _selectedArea?: EnhancedArea;
  @internalProperty() private _selectedEntity?: EnhancedEntity;
  @internalProperty() private _selectedPerson?: EnhancedPerson;
  @internalProperty() private _sortOrder?: number;
  @internalProperty() private _visible?: boolean;
  @internalProperty() private _last_hash: string = '';
  @internalProperty() private _unsub?: () => void;

  set hass(hass: HomeAssistant) {
    this._hass = hass;

    if (!this._entity_types) this._load_entity_types();

    const hash = location.hash?.substr(1);

    if (hash && hash !== this._last_hash) {
      switch (this.config.registry) {
        case 'entity':
          // this._selectedEntity = hash;
          break;
        case 'person':
          // this._personPicked({ detail: { value: hash } });
          break;
        case 'area':
        default:
        // this._areaPicked({ detail: { value: hash } });
      }
    }

    this._last_hash = hash;

    if (!this._unsub) {
      fetchAreaRegistry(this._hass.connection).then((areas) => (this._areas = areas));

      this._unsub = subscribeAreaRegistry(this._hass.connection!, (areas) => {
        this._areas = areas;
      });
    }
  }

  // https://lit-element.polymer-project.org/guide/properties#accessors-custom
  public async setConfig(config: EnhancedTemplatesCardConfig): Promise<void> {
    if (config.test_gui) {
      getLovelace().setEditMode(true);
    }

    this.config = config;

    await _ha_entity_picker();
    await _config_elements();

    this.addEventListener('config-changed', this.handleConfigChanged);
  }

  protected handleConfigChanged(ev: Event) {
    this.config = (ev as EnhancedTemplatesConfigChangedEvent).detail.config;
  }

  protected async _load_entity_types() {
    this._entity_types =
      (await this._hass.callWS({
        type: 'enhanced_templates_entity_types',
      })) || [];
  }

  // https://lit-element.polymer-project.org/guide/templates
  protected render(): TemplateResult | void {
    let title: string, intro: string, render: () => TemplateResult, update: () => void;

    switch (this.config.registry) {
      case 'entity':
        title = localize('title.entity');
        intro = localize('intro.entity');
        render = () => this._entitySettings();
        update = this._updateEntitySettings;
        break;
      case 'person':
        title = localize('title.person');
        intro = localize('intro.person');
        render = () => this._personSettings();
        update = this._updatePersonSettings;
        break;
      case 'area':
      default:
        title = localize('title.area');
        intro = localize('intro.area');
        render = () => this._areaSettings();
        update = this._updateAreaSettings;
    }

    return html`
      <ha-card .header=${this.config.hide_title ? null : title}>
        <div class="card-content">${this._intro(intro)} ${render()}</div>
        <div class="buttons">
          <mwc-button @click=${update} .disabled=${this._disabled()}> ${localize('update.one')} </mwc-button>
        </div>
      </ha-card>
    `;
  }

  private _disabled(): boolean {
    switch (this.config.registry) {
      case 'entity':
        return !this._selectedEntity || this._selectedEntity.entity_id === '';
      case 'person':
        return !this._selectedPerson || this._selectedPerson.id === '';
      case 'area':
      default:
        return !this._selectedArea || this._selectedArea.id === '';
    }
  }

  private _intro(content: string): TemplateResult | undefined {
    if (this.config.hide_intro) return undefined;
    return html`<p>${content} ${localize('intro.update')}</p>`;
  }

  private _areaDropDown({
    allow_null = false,
    disabled = false,
    onSelectedChanged,
    show_description = false,
  }: {
    allow_null?: boolean;
    disabled?: boolean;
    onSelectedChanged: (this: GlobalEventHandlers, ev: CustomEvent) => any | null;
    show_description?: boolean;
  }): TemplateResult {
    return html`
      <ha-select
        class="input"
        .label=${localize('settings.area')}
        .disabled=${disabled}
        .value=${this._area_id || ''}
        @selected=${onSelectedChanged}
      >
        ${!allow_null ? null : html`<mwc-list-item value=""></mwc-list-item>`}
        ${this._areas?.map((area) => html`<mwc-list-item .value=${area.area_id}>${area.name}</mwc-list-item> `)}
      </ha-select>
      ${!show_description
        ? null
        : html`<div class=${disabled ? 'disabled' : 'secondary'}>${localize('settings.area_description')}</div>`}
    `;
  }

  private _nameInput({ placeholder }: { placeholder?: string }): TemplateResult {
    return html`
      <ha-textfield
        class="input"
        .disabled=${this._disabled()}
        .label=${this._hass.localize('ui.dialogs.entity_registry.editor.name')}
        .placeholder=${placeholder}
        .value=${this._name || ''}
        @change=${this._nameChanged}
      >
      </ha-textfield>
    `;
  }

  private _sortOrderInput(): TemplateResult {
    return html`
      <ha-textfield
        class="input"
        .disabled=${this._disabled()}
        .label=${localize('settings.sort_order')}
        pattern="[0-9]+([.][0-9]+)?"
        .placeholder=${DEFAULT_SORT_ORDER}
        .value=${this._sortOrder || ''}
        type="number"
        @change=${this._sortOrderChanged}
      >
      </ha-textfield>
    `;
  }

  private _visibleInput(): TemplateResult {
    return html`
      <div class="row input">
        <ha-switch
          style="--mdc-theme-secondary:var(--switch-checked-color);"
          .checked=${this._visible}
          @change=${this._visibleChanged}
          .disabled=${this._disabled()}
        >
        </ha-switch>
        <div>
          <div class=${this._disabled() ? 'disabled' : ''}>${localize('settings.visible')}</div>
          <div class=${this._disabled() ? 'disabled' : 'secondary'}>
            ${localize('settings.visible_area_description')}
          </div>
        </div>
      </div>
    `;
  }

  private _areaSettings(): TemplateResult {
    return html`
      ${this._areaDropDown({ onSelectedChanged: this._areaPicked })}
      <div class="input">
        <ha-icon-picker
          .disabled=${this._disabled()}
          .label=${this._hass.localize('ui.dialogs.entity_registry.editor.icon')}
          .placeholder=${DEFAULT_AREA_ICON}
          .value=${this._icon}
          @change=${this._iconChanged}
        >
        </ha-icon-picker>
      </div>
      ${this._nameInput({ placeholder: this._selectedArea?.original_name })} ${this._sortOrderInput()}
      ${this._visibleInput()}
    `;
  }

  private _entitySettings(): TemplateResult {
    const entity_types =
      this._entity_types?.length == 0
        ? undefined
        : html`<ha-select
            class="input"
            .label=${localize('settings.entity_type')}
            .disabled=${this._disabled() || this._entity_types?.length == 0}
            .placeholder=${this._selectedEntity?.original_entity_type}
            .value=${this._entity_type || ''}
            @selected=${this._entityTypePicked}
          >
            ${this._entity_types?.map((type) => html` <mwc-list-item .value=${type}>${type}</mwc-list-item> `)}
          </ha-select>`;

    return html`
      <div>
        <ha-entity-picker
          .hass=${this._hass}
          .value=${this._selectedEntity?.entity_id}
          @value-changed=${this._entityPicked}
        />
        </ha-entity-picker>
      </div>
      ${this._areaDropDown({
        allow_null: true,
        disabled: this._disabled(),
        onSelectedChanged: this._entityAreaPicked,
      })}
      ${entity_types}
      ${this._sortOrderInput()}
      ${this._visibleInput()}
    `;
  }

  private _personSettings(): TemplateResult {
    return html`
      <div>
        <ha-entity-picker
          .hass=${this._hass}
          .value=${`person.${this._selectedPerson?.id}`}
          .includeDomains=${['person']}
          .hideClearIcon=${true}
          .label=${localize('person.one')}
          @value-changed=${this._personPicked}
        />
        </ha-entity-picker>
      </div>
      ${this._nameInput({ placeholder: this._selectedPerson?.original_name })}
      ${this._sortOrderInput()}
      ${this._visibleInput()}
    `;
  }

  private async _areaPicked(ev: CustomEvent): Promise<void> {
    const newValue = (ev.target as HTMLSelectElement).value;
    if (newValue === '') {
      this._selectedArea = { id: newValue };
    } else {
      try {
        this._selectedArea = await this._hass.callWS({
          type: 'enhanced_templates_area_settings',
          area_id: newValue,
        });
      } catch {}
    }
    this._icon = this._selectedArea?.icon === DEFAULT_AREA_ICON ? undefined : this._selectedArea?.icon;
    this._name = this._selectedArea?.name === this._selectedArea?.original_name ? undefined : this._selectedArea?.name;
    this._sortOrder =
      this._selectedArea?.sort_order === DEFAULT_SORT_ORDER ? undefined : this._selectedArea?.sort_order;
    this._visible = this._selectedArea?.visible;
  }

  private async _entityPicked(ev: CustomEvent): Promise<void> {
    if (ev.detail.value === '') {
      this._selectedEntity = { entity_id: ev.detail.value };
    } else {
      try {
        this._selectedEntity = await this._hass.callWS({
          type: 'enhanced_templates_entity_settings',
          entity_id: ev.detail.value,
        });
      } catch {}
    }

    this._area_id =
      this._selectedEntity?.area_id === this._selectedEntity?.original_area_id
        ? undefined
        : this._selectedEntity?.area_id;
    this._entity_type =
      this._selectedEntity?.entity_type === this._selectedEntity?.original_entity_type
        ? undefined
        : this._selectedEntity?.entity_type;
    this._sortOrder =
      this._selectedEntity?.sort_order === DEFAULT_SORT_ORDER ? undefined : this._selectedEntity?.sort_order;
    this._visible = this._selectedEntity?.visible;
  }

  private async _personPicked(ev: CustomEvent): Promise<void> {
    if (ev.detail.value === '') {
      this._selectedPerson = { id: ev.detail.value };
    } else {
      try {
        this._selectedPerson = await this._hass.callWS({
          type: 'enhanced_templates_person_settings',
          person_id: ev.detail.value.split('.')[1],
        });
      } catch {}
    }

    this._name =
      this._selectedPerson?.name === this._selectedPerson?.original_name ? undefined : this._selectedPerson?.name;
    this._sortOrder =
      this._selectedPerson?.sort_order === DEFAULT_SORT_ORDER ? undefined : this._selectedPerson?.sort_order;
    this._visible = this._selectedPerson?.visible;
  }

  private _entityAreaPicked(ev: CustomEvent): void {
    this._area_id = (ev.target as HTMLSelectElement).value;
  }

  private _entityTypePicked(ev: CustomEvent): void {
    this._entity_type = (ev.target as HTMLSelectElement).value;
  }

  private _iconChanged(ev: CustomEvent): void {
    this._icon = (ev.target as HTMLInputElement).value;
  }

  private _nameChanged(ev: CustomEvent): void {
    this._name = (ev.target as HTMLInputElement).value;
  }

  private _sortOrderChanged(ev: CustomEvent): void {
    this._sortOrder = parseInt((ev.target as HTMLInputElement).value);
  }

  private _visibleChanged(ev: CustomEvent): void {
    this._visible = (ev.target as HTMLInputElement).checked;
  }

  private _updateAreaSettings(): void {
    this._hass.callService('enhanced_templates', 'set_area', {
      area_id: this._selectedArea?.id,
      icon: this._icon,
      name: this._name,
      sort_order: this._sortOrder,
      visible: this._visible,
    });
  }

  private _updateEntitySettings(): void {
    this._hass.callService('enhanced_templates', 'set_entity', {
      entity_id: this._selectedEntity?.entity_id,
      area_id: this._area_id,
      entity_type: this._entity_type,
      sort_order: this._sortOrder,
      visible: this._visible,
    });
  }

  private _updatePersonSettings(): void {
    this._hass.callService('enhanced_templates', 'set_person', {
      id: this._selectedPerson?.id,
      name: this._name,
      sort_order: this._sortOrder,
      visible: this._visible,
    });
  }

  // https://lit-element.polymer-project.org/guide/styles
  static get styles(): CSSResult {
    return css`
      .row {
        margin-top: 8px;
        color: var(--primary-text-color);
        display: flex;
        align-items: center;
      }

      .secondary {
        color: var(--secondary-text-color);
      }

      .disabled {
        color: var(--disabled-text-color);
      }

      .buttons {
        width: 100%;
        box-sizing: border-box;
        border-top: 1px solid var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12));
        display: flex;
        justify-content: space-between;
        flex-direction: row-reverse;
        padding-top: 8px;
        padding-right: 8px;
        padding-left: 8px;
        padding-bottom: max(env(safe-area-inset-bottom), 8px);
      }

      .input {
        margin-top: 24px;
      }

      ha-icon-picker > ha-combo-box,
      ha-select,
      ha-textfield {
        width: 100%;
      }

      ha-switch {
        margin-right: 16px;
      }
    `;
  }

  public getCardSize(): number {
    return 8 + (this.config.hide_title ? 0 : 2) + (this.config.hide_intro ? 0 : 1);
  }
}
