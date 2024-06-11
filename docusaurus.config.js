// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */

import {themes as prismThemes} from 'prism-react-renderer';

(module.exports = {
  title: 'MyCompany documentation',
  tagline: 'MyCompany',
  url: 'https://lsfusion-solutions.github.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'ignore', // Should be updated to 'warn' in the future due to current functionality issues
  favicon: 'img/favicon.ico',
  organizationName: 'lsfusion-solutions', // Usually your GitHub org/user name.
  projectName: 'lsfusion-solutions.github.io', // Usually your repo name.
  deploymentBranch: 'main', 
  trailingSlash: true,
 
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/lsfusion-solutions/mycompany-docs/edit/main/',
          editLocalizedFiles: true,
          routeBasePath: '/',
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/lsfusion-solutions/mycompany-docs/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-38678623-1',
        },
        gtag: {
          trackingID: 'G-9PP67L9JM9',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'MyCompany',
        logo: {
          alt: 'Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://github.com/lsfusion-solutions/mycompany',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },        
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'MyCompany',
            items: [
              {
                label: 'Docs',
                to: '/',
              },
              {
                label: 'Website',
                href: 'https://mycompany.lsfusion.org/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/lsfusion_official',
              },
              {
                label: 'Slack',
                href: 'https://join.slack.com/t/lsfusion/shared_invite/zt-1itj7vlmf-9aBIP__nj9iMJglDaecqXg',
              },
              {
                label: 'Stack Overflow',
                href: 'https://ru.stackoverflow.com/questions/tagged/lsfusion',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Habr',
                href: 'https://habr.com/ru/company/lsfusion/blog/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/lsfusion-solutions/mycompany',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} lsFusion Foundation. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.nightOwlLight,
        darkTheme: prismThemes.vsDark,      
        additionalLanguages: ['bash', 'css', 'java', 'json'],
      },
    }),
  markdown: {
    format: 'mdx',
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true
    }
  },  
  i18n: {
    defaultLocale: 'ru',
    locales: ['en', 'ru'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      ru: {
        label: 'Русский',
      },
    },  
  },
});
