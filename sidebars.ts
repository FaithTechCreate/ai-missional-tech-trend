import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docs: [
    "intro",
    {
      type: "category",
      label: "Understanding AI",
      items: [
        "understanding/defining",
        "understanding/current",
        "understanding/future",
        "understanding/risks",
        "understanding/ethics",
        "understanding/resources",
      ],
    },
    {
      type: "category",
      label: "Building AI for Ministry",
      items: [
        "building/intro",
        "building/principles",
        "building/discern",
        "building/develop",
        "building/implement",
      ],
    },
    {
      type: "category",
      label: "Applying AI to Ministry",
      items: [
        "applying/problems",
        "applying/opportunities",
        "applying/needs",
        "applying/challenges",
        "applying/effect",
        "applying/uses",
        "applying/getting-started",
      ],
    },
  ],
};

export default sidebars;
