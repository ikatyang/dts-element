module.exports = {
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js"],
  mapCoverage: true,
  coverageReporters: ["lcov", "text-summary"],
  transform: { "\\.ts$": "<rootDir>/node_modules/ts-jest/preprocessor.js" },
  testMatch: ["**/{tests,__tests__}/**/*.ts"],
  collectCoverage: !!process.env.CI,
  collectCoverageFrom: ["src/**/*.ts"],
  coveragePathIgnorePatterns: [
    "/index\\.ts",
    "src/constants\\.ts",
    "src/collections\\.ts"
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
};
