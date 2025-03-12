import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Aektara',
  tagline: '"Your All-in-One Workforce Management Solution"',
  favicon: 'img/favicon.svg',
  
  url: 'https://aekatra-timesheet.netlify.app/',

  baseUrl: '/',

  organizationName: 'facebook',
  projectName: 'docusaurus',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          include: ["**/*.md", "**/*.mdx"],
          editUrl: ({docPath }) => {
            const formattedDoc = docPath.replace("/docs/", "").replace(".md", "");
            return `https://aekatra-timesheet.netlify.app/admin/#/collections/documentation/entries/${formattedDoc}`;
          },
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
        title: 'Aektara',
        logo: {
          alt: 'My Site Logo',
          src: 'img/aekatra-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Getting Started',
          },
          {
            href: 'https://github.com/JenuTandel',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      colorMode:{
        defaultMode:'light'
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
