exports.config = {
    tests: "./*_test.js",
    output: "./output",
    helpers: {
        WebDriverIO: {
            url: "http://digitalonus:d1g1t4l0nu5@exampleworkspace_exampleproject_proda.52.41.58.188.xip.io/petclinic/",
            browser: "chrome",
            restart: true,
            desiredCapabilities: {
                selenium.server.url: "http://172.18.0.14:4444"
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
