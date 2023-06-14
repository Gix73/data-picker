import path from "path";

const config = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      ["@"]: path.resolve(__dirname, "../src"),
    };
    return config;
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
