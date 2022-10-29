module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../public/src/**/stories.@(js|jsx|ts|tsx)",
    "../public/src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
