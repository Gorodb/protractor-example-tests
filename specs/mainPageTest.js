import { YandexPage } from '../pages/yandexPage.js';

describe(`Yandex page test example:`, () => {
    beforeAll(async () => {
        await YandexPage.openMainPage();
    });

    describe(`Should search for text 1:`, () => {
        it('Search text', () => {
            YandexPage.searchForText("Protractor tests");
        });

        it('Assert search results', () => {
            // YandexPage.assertForResultCount(9);
        });
    });

    describe(`Should search for text 2:`, () => {
        it('Search text', () => {
            YandexPage.openMainPage();
            YandexPage.anotherSearchImpl();
        });

        it('Assert search results', async () => {
            await YandexPage.assertForResultCount();
        });
    });
});
