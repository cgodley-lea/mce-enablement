import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Marketing Cloud Engagement Enablement',
  tagline: 'Self-paced MCE training for ListEngage Academy, built for MCAE and MCN practitioners.',
  favicon: 'img/favicon.svg',

  future: {v4: true},

  url: 'https://cgodley-lea.github.io',
  baseUrl: '/mce-enablement/',
  organizationName: 'cgodley-lea',
  projectName: 'mce-enablement',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {format: 'mdx', hooks: {onBrokenMarkdownLinks: 'throw'}},

  i18n: {defaultLocale: 'en', locales: ['en']},

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Quicksand:wght@400;500;700&display=swap',
      type: 'text/css',
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {customCss: ['./src/css/tokens.css', './src/css/custom.css']},
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {defaultMode: 'light', disableSwitch: true, respectPrefersColorScheme: false},
    navbar: {
      title: 'ListEngage Academy · MCE Enablement',
      items: [
        {to: '/', label: 'Course Overview', position: 'left', activeBaseRegex: '^/mce-enablement/?$'},
        {type: 'docSidebar', sidebarId: 'courseSidebar', position: 'left', label: 'Lessons'},
      ],
    },
    footer: {
      style: 'dark',
      copyright: `ListEngage Academy · Salesforce Certified Experts`,
    },
    prism: {theme: prismThemes.github, additionalLanguages: ['sql']},
  } satisfies Preset.ThemeConfig,
};

export default config;
