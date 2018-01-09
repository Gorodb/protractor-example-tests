const helpers = require('protractor-helpers');
const moment = require('moment');
import { log } from '../helpers/logHelper.js';
import { getRandomInt, loremText } from '../helpers/dataHelper.js';

let searchField = element(by.xpath(`//div[@class="search2__input"]//span[@class="input__box"]/input`));
let searchBtn = element(by.xpath('//div[@class="search2__button"]/button'));
let results = element.all(by.xpath(`//div[@class="content__left"]/ul/li`));
let resultByIndex = (i) => element(by.xpath(`//div[class="content__left"]/ul/li[${href}]`));

export class YandexPage {

    static openMainPage() {
        log.info(`Open main page ${browser.params.baseUrl}`);
        browser.get(browser.params.baseUrl);
    }

    static searchForText(text) {
        expect(searchField.waitReady()).toBeTruthy();
        helpers.clearAndSetValue(searchField, text);
        searchBtn.click();
    }

    static anotherSearchImpl(text) {
        expect(searchField.waitReady()).toBeTruthy();
        helpers.clearAndSetValue(searchField, text);
        browser.actions().sendKeys(protractor.Key.TAB).perform();
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
    }

    static assertForResultCount(i = 10) {
        let now = moment().format('DD-MM-YY');
        log.info(now);
        results.then((items) => {
            log.info(`${items.length} search results`);
            expect(items.length).toBeGreaterThan(i);
        });
    }

}