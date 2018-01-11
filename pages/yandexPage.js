const helpers = require('protractor-helpers');
import { log } from '../helpers/logHelper.js';
import { getRandomInt, loremText } from '../helpers/dataHelper.js';
import Yandex from './pageObjects/yandexPageObjets';

export class YandexPage {
    static async openMainPage() {
        log.info(`Open main page ${browser.params.baseUrl}`);
        await browser.get(browser.params.baseUrl);
    }

    static searchForText(text = loremText(20)) {
        expect(Yandex.searchField.waitReady()).toBeTruthy();
        helpers.clearAndSetValue(Yandex.searchField, text);
        Yandex.searchBtn.click();
    }

    static anotherSearchImpl(text = loremText(20)) {
        expect(Yandex.searchField.waitReady()).toBeTruthy();
        helpers.clearAndSetValue(Yandex.searchField, text);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
    }

    static async assertForResultCount(i = 9) {
        // То, как это работало без async await
        log.info(`Без await: ${Yandex.resultByIndex(getRandomInt(1,(await Yandex.results).length)).getText()}`);
        Yandex.results.then((items) => {
            log.info(`${items.length} search results`);
            expect(items.length).toBeGreaterThan(i);
        });

        // С async await
        log.info(`C await: ${await Yandex.resultByIndex(getRandomInt(1,(await Yandex.results).length)).getText()}`);
        log.info(`${(await Yandex.results).length} search results`);
        expect((await Yandex.results).length).toBeGreaterThan(i);
    }
}