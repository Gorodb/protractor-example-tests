const helpers = require('protractor-helpers');
import { log } from '../helpers/logHelper.js';
import { getRandomInt, loremText } from '../helpers/dataHelper.js';

let searchField = element(by.xpath(`//div[@class="search2__input"]//span[@class="input__box"]/input`));
let searchBtn = element(by.xpath('//div[@class="search2__button"]/button'));
let results = element.all(by.xpath(`//div[@class="content__left"]/ul/li`));
let resultByIndex = (i) => element(by.xpath(`//div[@class="content__left"]/ul/li[${i}]//h2`));

export class YandexPage {
    static async openMainPage() {
        log.info(`Open main page ${browser.params.baseUrl}`);
        await browser.get(browser.params.baseUrl);
    }

    static async searchForText(text = loremText(20)) {
        expect(searchField.waitReady()).toBeTruthy();
        helpers.clearAndSetValue(searchField, text);
        await searchBtn.click();
    }

    static anotherSearchImpl(text = loremText(20)) {
        expect(searchField.waitReady()).toBeTruthy();
        helpers.clearAndSetValue(searchField, text);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
    }

    static async assertForResultCount(i = 9) {
        // results.then((items) => {
            // log.info(`${items.length} search results`);
            // expect(items.length).toBeGreaterThan(i);
        // });

        log.info(`Без await: ${resultByIndex(getRandomInt(1,(await results).length)).getText()}`);
        log.info(`C await: ${await resultByIndex(getRandomInt(1,(await results).length)).getText()}`);

        log.info(`${(await results).length} search results`);
        expect((await results).length).toBeGreaterThan(i);
    }
}