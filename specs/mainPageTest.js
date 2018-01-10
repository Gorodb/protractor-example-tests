import { YandexPage } from '../pages/yandexPage.js';

describe(`Yandex page test example:`, () => {
    beforeAll(() => {
        YandexPage.openMainPage();
    });

    describe(`Should search for text:`, () => {
        it('Search text', () => {
            YandexPage.searchForText("Protractor tests");
        });

        it('Assert search results', () => {
            // YandexPage.assertForResultCount(9);
        });
    });

    describe(`Should search for text:`, () => {
        it('Search text', () => {
            YandexPage.openMainPage();
            YandexPage.anotherSearchImpl("Protractor tests");
        });

        it('Assert search results', () => {
            // YandexPage.assertForResultCount();
        });
    });
});
