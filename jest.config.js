module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['**/src/*.ts', '!**/node_modules/**'],
  coverageDirectory: 'test/coverage',
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      babelConfig: true
    }
  }
}
