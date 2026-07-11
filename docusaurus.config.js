// @ts-check
const { themes } = require('prism-react-renderer');

// remark-math and rehype-katex are ESM-only — must use async import
async function createConfig() {
  const remarkMath = (await import('remark-math')).default;
  const rehypeKatex = (await import('rehype-katex')).default;

  /** @type {import('@docusaurus/types').Config} */
  return {
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

    i18n: { defaultLocale: 'en', locales: ['en'] },

    presets: [
      [
        'classic',
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            routeBasePath: '/',
            remarkPlugins: [remarkMath],
            rehypePlugins: [rehypeKatex],
          },
          blog: false,
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],

    stylesheets: [
      {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css',
        type: 'text/css',
        crossorigin: 'anonymous',
      },
    ],

    themeConfig: ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'ICSE 10 Maths',
        logo: { alt: 'ICSE Maths', src: 'img/logo.svg' },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'chaptersSidebar',
            position: 'left',
            label: 'Chapters',
          },
          {
            type: 'docSidebar',
            sidebarId: 'pyqSidebar',
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
    }),
  };
}

module.exports = createConfig;
