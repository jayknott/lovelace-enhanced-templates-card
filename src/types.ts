import { HomeAssistant, LovelaceCard, LovelaceCardConfig, LovelaceCardEditor } from 'custom-card-helpers';

declare global {
  interface HTMLElementTagNameMap {
    'enhanced-template-card-editor': LovelaceCardEditor;
    'hui-error-card': LovelaceCard;
  }
}

// TODO Add your configuration elements here for type-checking
export interface EnhancedTemplatesCardConfig extends LovelaceCardConfig {
  type: string;
  registry?: 'area' | 'entity';
  test_gui?: boolean;
}

export interface HaPartialCustomElement extends HTMLElement {
  hass?: Any;
  _updateRoutes: () => void;
  routerOptions: Any;
  _computeParsedEventData: (yaml: string) => void;
  firstUpdated: (changedProps: object) => void;
}

export interface EnhancedArea {
  id: string;
  name?: string;
  original_name?: string;
  icon?: string;
  sort_order?: number;
  visible?: boolean;
}

export interface EnhancedEntity {
  entity_id: string;
  domain?: string;
  area_id?: string;
  original_area_id?: string;
  name?: string;
  entity_type?: string;
  original_entity_type?: string;
  sort_order?: number;
  visible?: boolean;
  disabled?: boolean;
}
