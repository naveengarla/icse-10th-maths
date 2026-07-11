// @ts-check
const { themes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ICSE Class 10 Maths',
  tagline: 'Study smarter, not harder — for Prasasta',
  favicon: 'img/favicon.ico',

  url: 'https://naveengarla.github.io',
  baseUrl: '/icse-10th-maths/',

  organizationName: 'naveengarla',
  projectName: 'icse-10th-maths',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Colour palette — matches the navy/teal we used in HTML
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'ICSE 10 Maths',
        logo: {
          alt: 'ICSE Maths',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'mainSidebar',
            position: 'left',
            label: 'Chapters',
          },
          {
            to: '/pyq',
            position: 'left',
            label: '📋 PYQ',
          },
          {
            href: 'https://github.com/naveengarla/icse-10th-maths',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Made with ❤️ for Prasasta · ICSE Class 10 · ${new Date().getFullYear()}`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
      // Algolia search can be added later — free for open-source
    }),
};

module.exports = config;
