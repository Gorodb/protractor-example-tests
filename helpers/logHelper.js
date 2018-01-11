const moment = require('moment');

let now = moment().format('DD-MM-YY hh:mm');

export class log {
	static info(value) {
        browser.controlFlow().execute(function() {
            console.info(`INFO ${now}: ${value} `);
        })
	}

    static warn(value) {
        browser.controlFlow().execute(function() {
            console.warn(`WARN ${now}: ${value} `);
        })
    }

    static error(value) {
        browser.controlFlow().execute(function() {
            console.error(`ERROR ${now}: ${value} `);
        })
    }
}