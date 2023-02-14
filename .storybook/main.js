module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-coverage',
  ],
  framework: '@storybook/react',
  features: {
    interactionsDebugger: true,
  },
  staticDirs: [{ from: '../public/fonts', to: '/static/media' }],
}
