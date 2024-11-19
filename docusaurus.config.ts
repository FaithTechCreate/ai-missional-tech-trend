import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "AI Missional Tech Trends",
  tagline: "Understanding AI in Ministry Contexts",
  favicon: "img/favicon.ico",
  url: "https://faithtechcreate.github.io",
  baseUrl: "/ai-missional-tech-trend/",
  organizationName: "FaithTechCreate",
  projectName: "ai-missional-tech-trend",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/FaithTechCreate/ai-missional-tech-trend/edit/main/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: "AI Missional Tech Trends",
      items: [
        { to: "/", label: "Report", position: "left" },
        {
          href: "https://github.com/FaithTechCreate/ai-missional-tech-trend",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Report",
              to: "/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "FaithTech",
              href: "https://faithtech.com",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FaithTech. Built with Docusaurus.`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
