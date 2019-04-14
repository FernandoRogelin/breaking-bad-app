module.exports = {
  collectCoverageFrom: [
    '<rootDir>/Containers/**/*.{js,jsx}',
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
    '<rootDir>/Containers/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/Containers/**/?(*.)(spec|test).{js,jsx,ts,tsx}',
  ],
};
