module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: [
    "<rootDir>/src"
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: [
    "ts",
    "js",
    "json",
  ],
  testMatch: ["<rootDir>/src/test/**/?(*.)+(spec|test).ts?(x)"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/jspm_packages/"],
  moduleNameMapper: {
    "^gen/(.*)": "<rootDir>/dist/$1",
    "^aire/(.*)": "<rootDir>/src/main/$1",
    "^test/(.*)": "<rootDir>/src/test/$1",
  },
  modulePaths: [
    "<rootDir>/src",
    "<rootDir>/node_modules",
    "<rootDir>/jspm_packages"
  ],
  setupFiles: [
    "<rootDir>/src/test/setup.ts"
  ]
};