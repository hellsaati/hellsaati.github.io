// @ts-check
import { themes as prismThemes } from "prism-react-renderer";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Həll Saatı",
  tagline: "Addım-addım dərindən öyrən",
  favicon: "img/favicon.ico",
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
    },
    "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@400;500;600&display=swap",
  ],

  future: {
    v4: true,
  },

  url: "https://hellsaati.github.io",
  baseUrl: "/",
  organizationName: "hellsaati",
  projectName: "hellsaati.github.io",
  deploymentBranch: "gh-pages",
  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/social-card.png",
      metadata: [
        {
          name: "description",
          content:
            "Addım-addım proqramlaşdırma və alqoritmlər kursu — C++ əsaslarından STL, axtarış və dinamik proqramlaşdırmaya qədər.",
        },
        {
          property: "og:description",
          content:
            "Addım-addım proqramlaşdırma və alqoritmlər kursu — C++ əsaslarından STL, axtarış və dinamik proqramlaşdırmaya qədər.",
        },
      ],
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      colorMode: {
        respectPrefersColorScheme: true,
        disableSwitch: false,
      },
      navbar: {
        title: "Həll Saatı",
        logo: {
          alt: "Logo",
          src: "img/logo.png",
        },
        items: [
          { to: "/", label: "Lessons", position: "left" },
          { to: "/roadmap", label: "Roadmap", position: "left" },
          { type: "custom-search", position: "right" },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
