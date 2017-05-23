exports.config = {
    tests: "./*_test.js",
    output: "./output",
    helpers: {
        WebDriverIO: {
            url: "http://localhost",
            browser: "chrome"
        }
    },
    include: {
        I: "./steps_file"
    },
    bootstrap: false,
    mocha: {
        reporterOptions: {
            reportDir: "./output"
        }
    },
    name: "DisneyDemo"
}
