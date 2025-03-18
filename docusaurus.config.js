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
      image: 'img/aekatra-final-logo.svg',
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
          {
            type: "docsVersionDropdown",
            position: 'right'
          }
        ],
        
      },
      colorMode:{
        defaultMode:'light'
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      typesense: {
        typesenseCollectionName: "aekatra-docs",
        typesenseServerConfig: {
          nodes: [
            {
              host: "siaxwl8ytuok0gdpp-1.a1.typesense.net",
              port: 443,
              protocol: "https",
            },
          ],
          apiKey: "Dga0ypm7vKynUOgQXzrAHY1vGovOoZ5j",
        },
        typesenseSearchParameters: {},
        contextualSearch: true,
      },
    }),
};

export default config;
