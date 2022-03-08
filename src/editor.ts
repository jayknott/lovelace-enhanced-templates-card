/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/camelcase */
import {
  LitElement,
  html,
  customElement,
  property,
  TemplateResult,
  CSSResult,
  css,
  internalProperty,
} from 'lit-element';
import { HomeAssistant, fireEvent, LovelaceCardEditor } from 'custom-card-helpers';

import { localize } from './localize/localize';
import { EnhancedTemplatesCardConfig } from './types';

@customElement('enhanced-templates-card-editor')
export class EnhancedTemplatesCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @internalProperty() private _config?: EnhancedTemplatesCardConfig;
  @internalProperty() private _helpers?: any;
  private _initialized = false;

  public setConfig(config: EnhancedTemplatesCardConfig): void {
    this._config = config;

    this.loadCardHelpers();
  }

  protected shouldUpdate(): boolean {
    if (!this._initialized) {
      this._initialize();
    }

    return true;
  }

  protected render(): TemplateResult | void {
    if (!this._helpers) {
      return html``;
    }

    // The climate more-info has ha-switch and paper-dropdown-menu elements that are lazy loaded unless explicitly done here
    this._helpers.importMoreInfoControl('climate');

    return html`
      <div class="card-config">
        <div class="values">
          <ha-select
            id="registry"
            class="input"
            .label=${localize('config.registry')}
            .value=${this._config?.registry || 'area'}
            @selected=${this._valueChanged}
          >
            <mwc-list-item value="area">${localize('area.one')}</mwc-list-item>
            <mwc-list-item value="entity">${localize('entity.one')}</mwc-list-item>
            <mwc-list-item value="person">${localize('person.one')}</mwc-list-item>
          </ha-select>
          <div class="row">
            <ha-switch
              id="hide_title"
              style="--mdc-theme-secondary:var(--switch-checked-color);"
              .checked=${!!this._config?.hide_title}
              @change=${this._valueChanged}
            >
            </ha-switch>
            <div>
              <div>${localize('config.hide_title')}</div>
            </div>
          </div>
          <div class="row">
            <ha-switch
              id="hide_intro"
              style="--mdc-theme-secondary:var(--switch-checked-color);"
              .checked=${!!this._config?.hide_intro}
              @change=${this._valueChanged}
            >
            </ha-switch>
            <div>
              <div>${localize('config.hide_intro')}</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  private _initialize(): void {
    if (this.hass === undefined) return;
    if (this._config === undefined) return;
    if (this._helpers === undefined) return;
    this._initialized = true;
  }

  private async loadCardHelpers(): Promise<void> {
    this._helpers = await (window as any).loadCardHelpers();
  }

  private _valueChanged(ev: CustomEvent): void {
    if (!this._config) return;

    const target = ev.target as HTMLInputElement;

    if (!target) return;

    const value: string | boolean | null | undefined = target.id === 'registry' ? target.value : target.checked;

    if (value === this._config[target.id]) return;

    if (['', null, undefined].includes(value as string | null | undefined)) {
      delete this._config[target.id];
    } else {
      this._config = { ...this._config, [target.id]: value };
    }

    fireEvent(this, 'config-changed', { config: this._config });
  }

  static get styles(): CSSResult {
    return css`
      .row {
        margin-bottom: 16px;
        margin-top: 16px;
        color: var(--primary-text-color);
        display: flex;
        align-items: center;
      }

      .values {
        padding-left: 16px;
        background: var(--secondary-background-color);
        display: grid;
      }

      ha-switch {
        margin-right: 16px;
      }
    `;
  }
}
