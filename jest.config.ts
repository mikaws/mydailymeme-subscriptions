export default {
  clearMocks: true,
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ],
  coverageProvider: 'v8',
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: { '\\.(js|ts)$': '@sucrase/jest-plugin' },
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
  ]
}
