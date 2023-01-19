module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-coverage',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    '@storybook/addon-coverage',

  ],
  staticDirs: [{ from: '../public/fonts', to: '/static/media' }],
  framework: '@storybook/react',
  features: {
    interactionsDebugger: true,
  },

}
