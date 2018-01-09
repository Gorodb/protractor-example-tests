export class log {
	static info(value) {
        browser.controlFlow().execute(function() {
            console.log(`INFO: ${value} `);
        })
	}
}