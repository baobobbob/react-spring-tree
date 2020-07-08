module.exports = {
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  transform: {},
  preset: 'ts-jest',
  setupFiles: ['./setupTests.js'],
  collectCoverageFrom:[
    "src/*.tsx",
    "src/*.ts",
    "src/**/*.tsx",
    "src/**/*.ts"
  ],
  moduleNameMapper: {
    '\\.(css|scss|less)$': 'identity-obj-proxy',
  },
}
