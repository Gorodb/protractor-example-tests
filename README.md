# Пример тестов на Protractor

После клонирования проекта, для подтягивания зависимостей в корневой директории выполнить **yarn** или **npm install** (при этом подразумевается, что на машине уже установлен node.js, и yarn, если используется эта команда)

В терминале выполнить **protractor conf.js** для запуска всех тестов

## Структура каталогов

> helpers
>
> specs - тесты jasmine
>
> pages - каталог с описанием page object и логикой тестов
>

## Используемые технологии

Protractor - https://github.com/angular/protractor

Тестовый фреймворк Jasmine2 - https://jasmine.github.io/

Подключено 2 вида отчетов для примера: 

allure - https://github.com/allure-framework/allure-jasmine

protractor-screenshoter-plugin - https://github.com/azachar/protractor-screenshoter-plugin

