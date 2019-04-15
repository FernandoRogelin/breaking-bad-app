module.exports = {
  collectCoverageFrom: [
    '<rootDir>/containers/**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  transform: {
    '\\.js$': 'babel-jest',
  },
  moduleNameMapper: {
    '^#(.*)$': '<rootDir>$1',
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testMatch: [
    '<rootDir>/containers/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/containers/**/?(*.)(spec|test).{js,jsx,ts,tsx}',
  ],
};
