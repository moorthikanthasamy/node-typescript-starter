module.exports = {
   testEnvironment: "node",
   verbose: true,
   automock: false, //This option tells Jest that all imported modules in your tests should be mocked automatically.
   roots: ['<rootDir>/src'],
   transform: {
      '^.+\\.tsx?$': 'ts-jest'
   },
   coverageThreshold: {
      global: {
         branches: 80,
         functions: 80,
         lines: 80,
         statements: 80
      }
   },
   coverageReporters: ['json', 'lcov', 'text', 'clover']
}