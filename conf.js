'use strict';
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    framework: 'jasmine2',
    // SELENIUM_PROMISE_MANAGER: false,
    plugins: [{
        package: 'protractor-screenshoter-plugin',
        screenshotPath: './REPORTS/e2e',
        // screenshotOnExpect: 'failure+success',
        screenshotOnExpect: 'failure',
        screenshotOnSpec: 'none',
        withLogs: true,
        writeReportFreq: 'asap',
        imageToAscii: 'none',
        clearFoldersBeforeTest: true
    }],
	allScriptsTimeout: 30000,
	chromeOnly: false,
	directConnect: true,
	getPageTimeout: 20000,
	maxSessions: -1,
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: [
        'specs/mainPageTest.js'
    ],
    jasmineNodeOpts: {
	    defaultTimeoutInterval: 30000
	},
    multiCapabilities: [
       //{ browserName: "firefox" },
    	{
    		browserName: 'chrome',
		    chromeOptions: {
		        args: [
                    '--test-type=ui',
		            '--disable-gpu',
		            '--disable-impl-side-painting',
		            '--disable-gpu-sandbox',
		            '--disable-accelerated-2d-canvas',
		            '--disable-accelerated-jpeg-decoding',
		            '--no-sandbox'
		        ]
		    }
   		}
    ],
    onPrepare: function () {
        require('./helpers/waitReady.js'); //добавляет ожидание локатора waitReady к jasmine
        require('babel-core/register');
        const AllureReporter = require('jasmine-allure-reporter');
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        browser.ignoreSynchronization = true;
        jasmine.getEnv().addReporter(new SpecReporter({ //jasmine console reporter
          spec: {
            displayStacktrace: true
          }
        }));
        jasmine.getEnv().addReporter(new AllureReporter({ //allure reporter
            resultsDir: `allure-results`
        }));
        jasmine.getEnv().afterEach(function(done){ //allure screenshots
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });
        return global.browser.getProcessedConfig().then(function(config) { });
	},
    params: {
        baseUrl: 'https://yandex.ru/'
    }
};