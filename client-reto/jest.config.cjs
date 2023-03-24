module.exports = {
    verbose: true,
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.jsx?$': 'babel-jest'
    },
    moduleNameMapper: {
      "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.js",
      "\\.(scss|sass)$": "<rootDir>/__mocks__/styleMock.js"
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']
};
  