# Рекомендации по разработке фронтенда на сборщиках

## Содержание
- [Введение](#intro)
- [Webpack](#webpack)
    - [Установка](#installation)
    - [Комманды](#structure)
    - [Структура](#structure)
- [Webpack + Pug](#webpack-pug)
    - [Установка](#installation)
    - [Структура](#structure)

## Введение

На данный момент на проектах используется 2 сборщика – стандартный Webpack и продвинутая сборка с использованием Pug. 

На несложных проектах, или же на проектах с привлечением к верстке джуниоров используем стандартную сборку. Для более серьезных проектов, с прокачанными разработчиками используем расширенную сборку с Pug.

Склонировать ту или иную сборку можно из этой папки, а также перейдя по ссылке в разделе установк.

## Webpack

### Установка

- Скачать папку webpack с этого репозитория
- Перейти на [прямой репозиторий со сборкой](https://github.com/saimon322/webpack-2021) и склонировать проект оттуда

### Команды

Modules install / dev / prod:
    $ npm i
    $ npm start
    $ npm run build

### Структура

Структура сборки представляет собой полное разделение на компоненты html кода страниц, стилей и скриптов на стадии разработки и сборку в объединенные файлы на проде.

## Webpack + PUG

![PngItem_128848](https://user-images.githubusercontent.com/22715126/140083253-4e5b9ffa-b339-4f78-b583-7f87535e7d40.png)

### Установка

- Скачать папку webpack-pug с этого репозитория
- Перейти на [прямой репозиторий со сборкой](https://github.com/smiledie-hub/webpack-assembly) и склонировать проект оттуда

### Команды

Modules install / dev / prod:
    $ npm i
    $ yarn dev
    $ yarn build

### Структура

Структура сборки представляет собой полное разделение на компоненты html кода страниц, стилей и скриптов на стадии разработки и сборку в объединенные файлы на проде.
