// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Metropolis Light Transport',
  tagline: 'IS F311 Project',
  // url: 'https://your-docusaurus-test-site.com',
  // baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  url: 'https://graphix.github.io', // Your website URL
  baseUrl: '/',
  // projectName: 'graphix.github.io',
  // organizationName: 'BITS-Hyderabad',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'BITS-Hyderabad', // Usually your GitHub org/user name.
  projectName: 'MLT', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Metropolis Light Transport',
        logo: {
          alt: 'My Site Logo',
          src: 'img/utahspot.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/KB421337/CG-Project',
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
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Papers',
            items: [
              {
                label: 'Introduction',
                href: 'https://www.cs.drexel.edu/~david/Classes/Papers/p343-whitted.pdf',
              },
              {
                label: 'Path Tracing',
                href: 'https://www.cse.chalmers.se/edu/year/2011/course/TDA361/2007/rend_eq.pdf',
              },
              {
                label: 'BiDirectional Path Tracing',
                href: 'https://www.cs.jhu.edu/~misha/ReadingSeminar/Papers/Veach94.pdf ',
              },
              {
                label: 'MLT Main Reference',
                href: 'https://graphics.stanford.edu/papers/metro/metro.pdf',
              },
              {
                label: 'MLT - Multiple Importance Sampling',
                href: 'https://dl.acm.org/doi/pdf/10.1145/218380.218498',
              },
              {
                label: 'MLT - Primary Sample Space',
                href: 'https://www.researchgate.net/publication/220507359_A_Simple_and_Robust_Mutation_Strategy_for_the_Metropolis_Light_Transport_Algorithm ',
              },
              {
                label: 'MLT - Multiplexed',
                href: 'https://cs.uwaterloo.ca/~thachisu/mmlt.pdf'
              }
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/KB421337/CG-Project',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;