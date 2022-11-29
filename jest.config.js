module.exports = {
    "rootDir": __dirname,
    "testEnvironment": "jsdom",
    "testPathIgnorePatterns": ["node_modules"],
    "transform": {
      "^.+\\.(js|jsx)$": "babel-jest",
    },
    "collectCoverageFrom" : [
      "src/**/*.{js,jsx}",
      "!<rootDir>/node_modules/"
    ],
    "coverageThreshold": {
      "global": {
        "branches": 90,
        "functions": 90,
        "lines": 90,
        "statements": 90
      }
    },
  }