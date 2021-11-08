# Регламент по верстке на сборщиках

## Содержание
- [Введение](#intro)
- [Общая установка](#общая-установка)
- [Развертка проекта](#развертка-проекта)
- [Webpack](#webpack)
    - [Установка](#установка)
    - [Команды](#команды)
    - [Структура](#структура)
        - [HTML](#html)
        - [SCSS](#scss)
        - [JS](#js)
- [Webpack + Pug](#webpack-pug)
    - [Установка](#установка-1)
    - [Команды](#команды-1)
    - [Структура](#структура-1)

## Введение

На данный момент на проектах используется 2 сборщика – стандартный Webpack и продвинутая сборка с использованием Pug. 

На несложных проектах, или же на проектах с привлечением к верстке джуниоров используем стандартную сборку. Для более серьезных проектов, с прокачанными разработчиками используем расширенную сборку с Pug.

Склонировать ту или иную сборку можно из этой папки, а также перейдя по ссылке в разделе установк.

## Общая установка

Для работы нам понадобится:

1. node.js версии 12+

    Скачать можно с официального сайта [Node.js](https://nodejs.org/en/)

    Если у вас уже установлена версия node.js ниже 12, нужно скачать инструмент [nvm](https://github.com/coreybutler/nvm-windows/releases)

    Находим здесь файл [nvm-setup.zip](https://github.com/coreybutler/nvm-windows/releases/download/1.1.8/nvm-setup.zip)

    Запускаем командную строку от *имени администратора* и используем команды для установки нужного пакета:
    
    ```shell
    $ nvm list
    $ nvm install 12.0.0
    $ nvm use 12.0.0
    ```

2. Webpack, установленный глобально

    ```shell
    $ npm install -g webpack
    ```

## Развертка проекта

1. Скачать последнюю версию сборщика
2. Запустить установку модулей npm i
3. Создать новый гит репозиторий для проекта
4. Занести данные проекта в:
   - package.json
   - package-lock.json
   - README.md
   - шапка сайта
5. Создать favicon сайта из svg  
   https://realfavicongenerator.net/  
   обновить папку img/favicon/
6. Скачать и настроить шрифты  
   https://webfonts.pro/  
   https://fontstorage.com/ru/  
   обновить preload шрифтов в шапке
7. Заранее рассмотреть макеты и установить необходимые библиотеки

## Webpack

<img src="https://user-images.githubusercontent.com/22715126/140086271-af88f7e3-8b91-41ed-8d7b-d348d62f8f61.png" height="80" title="Webpack" alt="Webpack">

### Установка

- Скачать папку webpack с текущего репозитория
- Перейти на [прямой репозиторий со сборкой](https://github.com/saimon322/webpack-2021) и склонировать проект оттуда

### Команды

Modules install / dev / prod:
```shell
$ npm i
$ npm start
$ npm run build
```

### Структура

Структура сборки представляет собой полное разделение на компоненты html, стилей и скриптов на стадии разработки и сборку в объединенные файлы на проде.

#### HTML

1. Выносим из страниц общие компоненты header, footer со всех страниц  

    ![image](https://user-images.githubusercontent.com/22715126/140516193-701d24c8-ddbf-410c-986b-acd453cabb14.png)

2. Header подключаем с параметрами title, body_class(optional), menu current item для каждой страницы  

    ![image](https://user-images.githubusercontent.com/22715126/140518212-ae60954d-997f-4aba-856d-4a5fe09377e8.png)

3. Main контент страницы также разбиваем на файлы по секциям. Общие секции - в папку elements/template-parts, Уникальные – в папку своей страницы  

    ![image](https://user-images.githubusercontent.com/22715126/140518362-a634c915-f08b-4928-bb86-f69b8c7321ce.png)

4. Если подключаемые секции *reusable*, но контент в них отличается в разных секциях, то также как и в header передаем параметры. В качестве параметров можем использовать:

    - Текстовые строки
    - Массивы

    Пример (хлебные крошки):<br><br>
    
    ![image](https://user-images.githubusercontent.com/22715126/140623734-162d23df-bf20-4023-92e4-aa802c96651d.png)

#### SCSS

#### JS

## Webpack + PUG

<p>
    <img src="https://user-images.githubusercontent.com/22715126/140086271-af88f7e3-8b91-41ed-8d7b-d348d62f8f61.png" height="80" title="Webpack" alt="Webpack">
    &nbsp;&nbsp;&nbsp;&nbsp;
    <img src="https://user-images.githubusercontent.com/22715126/140083253-4e5b9ffa-b339-4f78-b583-7f87535e7d40.png" height="80" title="Pug" alt="Puh">
</p>

### Установка

- Скачать папку webpack-pug с текущего репозитория
- Перейти на [прямой репозиторий со сборкой](https://github.com/smiledie-hub/webpack-assembly) и склонировать проект оттуда

### Команды

Modules install / dev / prod:
```shell
$ npm i
$ yarn dev
$ yarn build
```

### Структура

![image](https://user-images.githubusercontent.com/22715126/140514742-6239a30f-31fc-4b89-a209-07dbf2cccb61.png)

Сборка отличается от стандартной несколькими продвинутыми вещами:
1. Шаблонизатор [PUG](https://gist.github.com/neretin-trike/53aff5afb76153f050c958b82abd9228) (инструкция по ссылке)
2. Менеджер пакетов yarn, позволяющий использовать относительные пути до изображений и библиотек node_modules
