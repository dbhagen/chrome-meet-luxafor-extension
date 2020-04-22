module.exports = {
  clearMocks: true,
  moduleFileExtensions: ["js", "ts"],
  testMatch: ["**/*.test.ts"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**/([a-zA-Z_]*).{js,ts}", "!**/*.test.{js,ts}"],
};
