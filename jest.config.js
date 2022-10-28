/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  roots: ["<rootDir>/public/src"],
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
};
