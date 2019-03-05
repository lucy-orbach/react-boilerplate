module.exports = {
  setupFilesAfterEnv: ["<rootDir>/testSetup.js"],
  moduleNameMapper: {
    ".+\\.(css|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
  }
};
