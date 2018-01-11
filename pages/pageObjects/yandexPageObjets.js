export default class Yandex {
    static get searchField() { return element(by.xpath(`//div[@class="search2__input"]//span[@class="input__box"]/input`)) }
    static get searchBtn() { return element(by.xpath('//div[@class="search2__button"]/button')) }
    static get results() { return element.all(by.xpath(`//div[@class="content__left"]/ul/li`)) }
    static resultByIndex(i) { return element(by.xpath(`//div[@class="content__left"]/ul/li[${i}]//h2`)) }
}