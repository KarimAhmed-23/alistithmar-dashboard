import type { Schema, Attribute } from '@strapi/strapi';

export interface MiniCompReportFile extends Schema.Component {
  collectionName: 'components_mini_comp_report_files';
  info: {
    displayName: 'ReportFile';
    icon: 'filePdf';
  };
  attributes: {
    FileName: Attribute.String & Attribute.Required;
    asset: Attribute.Media & Attribute.Required;
  };
}

export interface MiniCompReportTab extends Schema.Component {
  collectionName: 'components_mini_comp_report_tabs';
  info: {
    displayName: 'ReportTab';
    icon: 'calendar';
  };
  attributes: {
    TabTitle: Attribute.String & Attribute.Required;
    ReportFile: Attribute.Component<'mini-comp.report-file', true> &
      Attribute.SetMinMax<{
        min: 1;
      }>;
  };
}

export interface PageCompReports extends Schema.Component {
  collectionName: 'components_page_comp_reports';
  info: {
    displayName: 'Reports';
    icon: 'folder';
  };
  attributes: {
    ReportTab: Attribute.Component<'mini-comp.report-tab', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 2;
        max: 2;
      }>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    description: '';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['facebook', 'twitter', 'linkedin']> &
      Attribute.Private;
    title: Attribute.String & Attribute.Private;
    description: Attribute.Text & Attribute.Private;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'server';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Private;
    metaDescription: Attribute.String & Attribute.Private;
    metaImage: Attribute.Media & Attribute.Private;
    metaSocial: Attribute.Component<'shared.meta-social', true> &
      Attribute.Private;
    keywords: Attribute.String & Attribute.Private;
    metaRobots: Attribute.String & Attribute.Private;
    structuredData: Attribute.JSON & Attribute.Private;
    metaViewport: Attribute.String & Attribute.Private;
    canonicalURL: Attribute.String & Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'mini-comp.report-file': MiniCompReportFile;
      'mini-comp.report-tab': MiniCompReportTab;
      'page-comp.reports': PageCompReports;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
