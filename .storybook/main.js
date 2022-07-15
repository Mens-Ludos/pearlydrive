const path = require('path');

module.exports = {
  stories: [],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  framework: '@storybook/react',
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: true,
        esModuleInterop: true,
      },
    },
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@emotion/core': path.resolve('node_modules/@emotion/react'),
      'emotion-theming': path.resolve('node_modules/@emotion/react'),
      '@emotion/styled': path.resolve('node_modules/@emotion/styled'),
      '@emotion/react': path.resolve('node_modules/@emotion/react'),
    };
    return config;
  },
};
