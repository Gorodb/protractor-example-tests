import { YandexPage } from '../pages/yandexPage.js';

describe(`Yandex page test example:`, function() {
    beforeAll(() => {
        YandexPage.openMainPage();
    });

    describe(`Should search for text:`, function() {
        it('Search text', function() {
            YandexPage.searchForText("Protractor tests");
        });

        it('Assert search results', function() {
            YandexPage.assertForResultCount(9);
        });
    });

    describe(`Should search for text:`, function() {
        it('Search text', function() {
            YandexPage.openMainPage();
            YandexPage.anotherSearchImpl("Protractor tests");
        });

        it('Assert search results', function() {
            YandexPage.assertForResultCount();
        });
    });
});
