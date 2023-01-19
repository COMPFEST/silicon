const { getJestConfig } = require('@storybook/test-runner')

module.exports = {
  // The default configuration comes from @storybook/test-runner
  ...getJestConfig(),
  /** Add your own overrides below
   * @see https://jestjs.io/docs/configuration
   */

  reporters: [
    'default',
    [
      'jest-stare',
      {
        resultDir: 'results',
        reportTitle: 'SILICON Test Results',
        additionalResultsProcessors: ['jest-junit'],
        coverageLink: '../../coverage/storybook/lcov-report/index.html',
        jestStareConfigJson: 'jest-stare.json',
        jestGlobalConfigJson: 'globalStuff.json',
      },
    ],
  ],
}
