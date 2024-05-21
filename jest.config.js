module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    "jest-canvas-mock",
  ],
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
  },
};
