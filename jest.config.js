module.exports = {
    preset: 'jest-playwright-preset',
    testEnvironment: './custom-environment.js',
    setupFilesAfterEnv: ['./jest.setup.js'],
    transform: {
      '^.+\\.jsx?$': 'babel-jest', // Use Babel to transform JS files
    },
  };