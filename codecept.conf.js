exports.config = {
    tests: "./*_test.js",
    output: "./output",
    helpers: {
        WebDriverIO: {
            url: "http://digitalonus:d1g1t4l0nu5@exampleworkspace_exampleproject_proda.52.32.177.100.xip.io",
            browser: "chrome",
            user: "alansanchez3",
            key: "Uj4ztSqqNyBsmiVG6yYg",
            timeouts: {
                script: 60000,
                pageLoad: 30000
            },
            desiredCapabilities: {
                "browserstack.debug": true,
                version: "58"
            }
        }
    },
    include: {
        I: "./steps_file"
    },
    bootstrap: false,
    mocha: {
        reporterOptions: {
            reportDir: "./output",
            mochaFile: "./output/results.xml"
        }
    },
    name: "DisneyDemo"
}
