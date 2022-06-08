export default {
    testEnvironment: 'jsdom',
    verbose: true,
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    moduleNameMapper: {
        '^.+\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '^.+\\.svg$': 'jest-svg-transformer',
        '^@/(.*)$': '<rootDir>/src/$1',
        '^Dummy/(.*)$': '<rootDir>/src/$1',
    },
    transform: {
        // "\\.[jt]sx?$": "babel-jest",
        '^.+\\.[jt]sx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    setupFilesAfterEnv: [
        '<rootDir>/src/setupTests.ts',
    ],
}
