module.exports = {
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json',
            diagnostics: false
        }
    },
    testRegex: 'test/.*\\.test\\.ts$',
    testResultsProcessor: 'jest-sonar-reporter',
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{ts,tsx}'],
    coverageDirectory: 'reports/test/unit/coverage',
    setupFilesAfterEnv: ['./jest.setup.js'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
    reporters: [
        'default',
        'summary',
        'jest-skipped-reporter',
        [
            'jest-junit', {outputDirectory: 'reports/test/unit', outputName: 'junit-report.xml'}
        ]
    ]
};
