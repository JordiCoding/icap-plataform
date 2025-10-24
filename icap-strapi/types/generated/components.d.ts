import type { Attribute, Schema } from '@strapi/strapi';

export interface PageComponentsNewsroom extends Schema.Component {
  collectionName: 'components_page_components_newsrooms';
  info: {
    displayName: 'Newsroom';
  };
  attributes: {
    button_text: Attribute.String;
    subtitle: Attribute.Blocks;
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'page-components.newsroom': PageComponentsNewsroom;
    }
  }
}
