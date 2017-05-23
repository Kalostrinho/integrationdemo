exports.config = {
    tests: "../DaaS/Rules/*_test.js",
    output: "../Reports",
    helpers: {
        REST: {
            endpoint: "http://dev-api.aditazz.net/v1"
        },
        TestData: {}
    },
    include: {
        Props: "./environmentProperties",
        Templates: "./requestTemplates",
        Common: "./commonFunctions"
    },
    bootstrap: false,
    mocha: {
        reporterOptions: {
            reportDir: "../Reports"
        }
    },
    name: "AditazzCodeceptJS"
}
