import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testMatch: ['<rootDir>/__tests__/*.test.{ts,tsx}'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Maps @/ to src/
    '^@app/(.*)$': '<rootDir>/src/app/$1', // Maps @app/ to src/app/
    '^@utils/(.*)$': '<rootDir>/src/utils/$1', // Maps @utils/ to src/utils/
    '^@assets/(.*)$': '<rootDir>/public/assets/$1', // Maps @assets/ to public/assets/
    '^@api/(.*)$': '<rootDir>/src/api/$1', // Maps @api/ to src/api/
  },
};

export default createJestConfig(config);
