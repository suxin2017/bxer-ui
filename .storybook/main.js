module.exports = {
  stories: [
    "../src/stories/Introduce.stories.mdx",
    "../src/**/*.stories.(js|mdx)",
  ],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs/register",
    "@storybook/addon-docs",
  ],
};
