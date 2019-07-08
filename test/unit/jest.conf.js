const path = require('path')

module.exports = {
    verbose: true,
    testURL: 'http://localhost/',
    testEnvironment: 'jsdom',
    rootDir: path.resolve(__dirname, '../../'),
    roots: ['<rootDir>/test', '<rootDir>/src'],
    moduleFileExtensions: [
        'js',
        'json',
        'vue',
        'jsx'
    ],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    transform: {
        '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
        '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
    },
    testPathIgnorePatterns: [
        '<rootDir>/test/e2e'
    ],
    snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
    setupFiles: ['<rootDir>/test/unit/setup'],
    coverageDirectory: '<rootDir>/test/unit/coverage',
    collectCoverageFrom: [
        'src/**/*.{js,vue}',
        '!src/main.js',
        '!src/router/index.js',
        '!**/node_modules/**'
    ]
}
