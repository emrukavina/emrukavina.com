import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Em Rukavina",
  tagline: 'Hi.',
  favicon: 'https://avatars.githubusercontent.com/u/220944585?v=4',

  future: {
    v4: true,
  },

  url: 'https://emrukavina.com',
  baseUrl: '/',

  organizationName: 'emrukavina',
  projectName: 'emrukavina.com',

  onBrokenLinks: 'throw',
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
        docs: false,
        blog: {
          showReadingTime: true,
          routeBasePath: '/',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: "Em Rukavina's Blog",
        logo: {
          alt: 'Em Rukavina',
          src: 'https://avatars.githubusercontent.com/u/220944585?v=4',
        },
        items: [
          {to: '/about', label: 'About me', position: 'left'},
          {
            href: '/verification',
            label: '@emrukavina',
            position: 'right',
          }
        ],
      },
      announcementBar: {
      id: 'announcement_16_07_2025',
      content: 'Some of my clients have reported receiving messages requesting payments or asking for their hosting passwords. <a href="/verification">Read this!</a>',
      backgroundColor: '#cc0000ff',
      textColor: '#ffffffff',
      isCloseable: false,
    },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Em Rukavina.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
