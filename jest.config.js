module.exports = {
  verbose: true,
  collectCoverageFrom: [
    'src/**',
    '!**/node_modules/**'
  ],
  coverageDirectory: 'test/coverage',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  moduleFileExtensions: ['js', 'json'],
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
  }
}
