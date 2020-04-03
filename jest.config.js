module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.ts"
    ],
    coverageThreshold: {
        "global": {
            "branches": 90,
            "functions": 90,
            "statements": 90
        }
    },
    roots: [
        "./tests",
        "./src"
    ],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    }
}
