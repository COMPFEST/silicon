module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-actions',
  ],
  framework: '@storybook/react',
  previewHead: (head) => `
  ${head}
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');
  </style>
`,
}
