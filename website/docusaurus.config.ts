import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'OpenEverest',
  tagline: 'Cloud-native database platform documentation',
  favicon: 'img/everest-fav.svg',

  future: {
    v4: true,
  },

  // Local / PoC. For a fork GitHub Pages demo, switch to:
  // url: 'https://<your-github-user>.github.io',
  // baseUrl: '/everest-doc/',
  url: 'https://docs.openeverest.io',
  baseUrl: '/',

  organizationName: 'openeverest',
  projectName: 'everest-doc',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Roboto:wght@400;500;700&family=Roboto+Mono:wght@400;500&display=swap',
      type: 'text/css',
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
         sidebarPath: './sidebars.ts',
         editUrl:
           'https://github.com/openeverest/everest-doc/edit/main/website/',
         lastVersion: '1.15',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/everest-mark.svg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'OpenEverest',
      logo: {
        alt: 'OpenEverest logo',
        src: 'img/everest-mark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/openeverest/everest-doc',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',
            },
            {
              label: 'Current site (MkDocs)',
              href: 'https://docs.openeverest.io/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/openeverest/everest-doc',
            },
            {
              label: 'OpenEverest',
              href: 'https://github.com/openeverest/openeverest',
            },
            {
              label: 'Website',
              href: 'https://openeverest.io/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Issue #378 (docs rework)',
              href: 'https://github.com/openeverest/everest-doc/issues/378',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OpenEverest. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'yaml', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
