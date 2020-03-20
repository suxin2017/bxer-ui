const path = require('path');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    stories: ['../src/**/*.stories.(js|mdx)'],
    addons: [
        '@storybook/preset-create-react-app',
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-knobs/register',
        '@storybook/addon-storysource',
        '@storybook/addon-docs',
        '@storybook/addon-viewport/register'
    ],
    // 代码分析
    // webpackFinal: (config, { configType }) => {
    //     config.plugins.push(new BundleAnalyzerPlugin());
    //     return config;
    // },
};
