'use strict';

exports.config = {
    framework: 'jasmine',
    // frameworkPath: './node_modules/jasmine/bin/jasmine.js',
    // frameworkPath: require.resolve('jasmine'),
    SELENIUM_PROMISE_MANAGER: false,
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
        './spec/*[sS]pec.js'
    ],
	jasmineNodeOpts: {
	    isVerbose: true,
	    showTiming: true,
	    showColors: true,
	    includeStackTrace: true,
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
        require('./helpers/waitReady.js');
        require('babel-core/register');
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        browser.ignoreSynchronization = true;
        return global.browser.getProcessedConfig().then(function(config) { });
	},
    params: {
        baseUrl: 'https://yandex.ru'
    }
};