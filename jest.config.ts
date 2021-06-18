import { resolve } from 'path'
const coverageThreshold = require('./src/tests-utils/coverage-threshold.json')

const baseDir = __dirname

module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    '**/!(*.d)*.ts',
    '**/!(*.d)*.tsx',
    '!src/index.tsx',
    '!server/index.ts',
    '!jest.config.ts',
    '!src/stoybook_exemple/stories/Button.stories.tsx',
    '!src/stoybook_exemple/stories/Button.tsx',
    '!src/tests-utils/',
  ],
  coverageDirectory: resolve(baseDir, 'built', 'coverage'),
  coverageReporters: ['text', 'html'],
  coverageThreshold: {
    global: coverageThreshold,
  },
  displayName: 'template-react-typescript',
  globalSetup: resolve(baseDir, 'src', 'tests-utils', 'jest-global-setup.js'),
  globals: {
    'ts-jest': {
      tsconfig: resolve(baseDir, 'tsconfig.json'),
    },
  },
  moduleDirectories: ['./node_modules', './src'],
  moduleNameMapper: {
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css)$':
      resolve(baseDir, 'src', 'tests-utils', 'mocks', 'image.js'),
  },
  modulePathIgnorePatterns: [resolve(baseDir, 'built')],
  preset: 'ts-jest/presets/js-with-babel',
  rootDir: baseDir,
  testEnvironment: 'jsdom',
}
