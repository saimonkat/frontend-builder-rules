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
- [Webpack + Pug](#webpack--pug)
    - [Установка](#установка-1)
    - [Команды](#команды-1)
    - [Структура](#структура-1)
- [Дополнения](#дополнения)
    - [Библиотеки](#библиотеки)
    - [Готовые решения](#готовые-решения)
    - [Изменения в node_modules](#изменения-в-node_modules)

## Введение

На данный момент на проектах используется 2 сборщика – стандартный Webpack и продвинутая сборка с использованием Pug. 

На несложных проектах, или же на проектах с привлечением к верстке джуниоров используем стандартную сборку. Для более серьезных проектов, с прокачанными разработчиками используем расширенную сборку с Pug.

Скачаь ту или иную сборку можно прямо из этого репозитория.

В конце README также содержатся важные дополнения в виде готовых решений, списка библиотек и гайду по измнениям node_modules.

## Общая установка

Для работы нам понадобится:

1. node.js версии 12+

    Скачать можно с официального сайта [Node.js](https://nodejs.org/en/)

    Если у вас уже установлена версия node.js ниже 12, нужно скачать инструмент [nvm](https://github.com/coreybutler/nvm-windows/releases)

    Находим здесь файл [nvm-setup.zip](https://github.com/coreybutler/nvm-windows/releases/download/1.1.8/nvm-setup.zip)

    Запускаем командную строку от *имени администратора* и используем команды для установки нужного пакета:
    
    ```shell
    nvm list
    nvm install 12.16.3
    nvm use 12.16.3
    ```

2. Project manager, установленный глобально

    - Webpack для первой сборки

        ``` npm install -g webpack ```
    
    - Yarn для второй сборки

        ``` npm install -g yarn ```

## Развертка проекта

1. Скачать последнюю версию сборщика
2. Запустить установку модулей
3. Создать новый гит репозиторий для проекта
4. Занести данные проекта в:
   - package.json
   - package-lock.json
   - README.md
   - шапку сайта

    ![image](https://user-images.githubusercontent.com/22715126/140879431-15918db2-43bd-4dae-83cf-2e4e73ae7376.png)
5. Создать favicon сайта из svg  
   https://realfavicongenerator.net/  
   обновить папку img/favicon/
6. Скачать и настроить шрифты  
   https://webfonts.pro/  
   https://fontstorage.com/ru/  
   обновить preload шрифтов в шапке
7. Заранее рассмотреть макеты и установить необходимые библиотеки
8. Подготовить структуру проекта:
    - Создать все HTML страницы в папке `html/pages` с шапкой, футером и пустым `<main>`
    - Наполнить index.html навигацией по страницам и стилизовать ее

    ![image](https://user-images.githubusercontent.com/22715126/142408877-8b714046-0092-4727-aac5-a02807cca136.png)
    - Подготовить пустые папки для HTML-секций страниц в папке `html/templates`
    - Подготовить пустые папки для SCSS-секций страниц в папке `scss/pages`


## Webpack

<img src="https://user-images.githubusercontent.com/22715126/140086271-af88f7e3-8b91-41ed-8d7b-d348d62f8f61.png" height="80" title="Webpack" alt="Webpack">

### Установка

1. Скачать папку [webpack](https://github.com/saimon322/frontend-builder-rules/tree/master/webpack) с текущего репозитория
2. Провести стартовую [развертку проекта](#развертка-проекта)

### Команды

Packages install / dev / prod:
```shell
npm i
npm start
npm run build
```

### Структура

Структура сборки представляет собой полное разделение на компоненты html, стилей и скриптов на стадии разработки и сборку в объединенные файлы на проде.

#### HTML

HTML-файлы в данной сборке используют [EJS](https://ejs.co/) синтаксис, ниже приведены все используемые конcтрукции:

- Подключение файла
    ```html
    <%=_.template(require('../templates/part.html'))() %>
    ```
    
- Подключение файла с параметрами
    ```html
    <%=_.template(require('../templates/index.html'))({
        title: "Homepage",
        pages: [
            {title: "Homepage", url: "homepage.html"},
            {title: "About", url: "about.html"},
        ]
    }) %>
    ```
- Использование переданных переменных в подключаемом файле
    ```html
    <h1><%=title%></h1>
    <ul>
        <% for (var i = 0; i < pages.length; i++) { %>
            <li><a href="<%= pages[i].url %>"><%= pages[i].title %></a></li>
        <% } %>
    </ul>
    ```
    
- Цикл for
    ```html
    <% for (var i = 1; i <= 10; i++) { %>
        <%=_.template(require('../templates/slide-' + i + '.html'))() %>
    <% } %>
    ```
    
Порядок работы:

1. Выносим из страниц общие компоненты header, footer со всех страниц  

    ![image](https://user-images.githubusercontent.com/22715126/140516193-701d24c8-ddbf-410c-986b-acd453cabb14.png)

2. Header подключаем с параметрами title, body_class(optional), menu current item для каждой страницы  

    ![image](https://user-images.githubusercontent.com/22715126/140518212-ae60954d-997f-4aba-856d-4a5fe09377e8.png)

3. Main контент страницы также разбиваем на файлы по секциям. Общие секции - в папку elements/template-parts, Уникальные – в папку своей страницы  

    ![image](https://user-images.githubusercontent.com/22715126/140518362-a634c915-f08b-4928-bb86-f69b8c7321ce.png)

    ❗ Каждая секция согласно HTML5 имеет тег `<section>` и должна содержать заголовок `<h1>`, `<h2>`, `<h3>`,  `<h4>`  
    (_пропуск провоцирует ошибки валидации_)
    
    ❗ Теги заголовков должны идти в каждой секции в семантическом порядке от более важного к менее важному
    
    Например, если по дизайну кажется что заголовок `<h3>` стоит перед `<h2>` то делаем `<h3>` через стандартный `<div>` или `<span>` чтобы не нарушать семантику
    
    ![image](https://user-images.githubusercontent.com/22715126/142491901-80a1dca1-5668-4d0c-866c-6f007b126beb.png)


4. Если подключаемые секции реюзабельны, но контент в них отличается в разных секциях, то также как и в header передаем параметры. В качестве параметров можем использовать:

    - Текстовые строки
    - Массивы

    Пример (хлебные крошки):
    
    ![image](https://user-images.githubusercontent.com/22715126/140623734-162d23df-bf20-4023-92e4-aa802c96651d.png)
    
5. Если нет четкого условия от заказчика насчте бутстрапа, то стандартно пишем верстку на [БЭМ](https://ru.bem.info/methodology/quick-start/), соблюдая все правила.
6. Все ссылки между страницами должны иметь:

    ❗ прямой путь без относительных `/` и `../`, чтобы избежать проблем с путями при загрузке сборщика в папку WP-темы
    
7. Все картинки должны иметь:

    ❗ прямой путь без относительных `/` и `../`, чтобы избежать проблем с путями при загрузке сборщика в папку WP-темы
    
    ❗ аттрибут alt (_пропуск провоцирует ошибки валидации_)

#### SCSS

Струтура стилей содержит:
- Глобальные стили (global.scss)
- Переменные брейкпойнтов, шрифтов и цветов (vars.scss)
- Миксины для брейпойнтов и повторяющихся стилей (mixins.scss)
    
Стили самих страниц разбиваются на файлы по секциям и компонентам:
- Общие компоненты (папка components)
- Стили секций страниц (папки pages/pagename)

Стили используют [директивы](https://sass-scss.ru/documentation/pravila_i_direktivi/) языка SASS, такие как `@import`, `@mixin` и `@extend`

#### JS
    
На проектах не используем jQuery, все скрипты пишем на чистом JS и разбиваем по логическим компонентам (блокам, слайдерам, классам) в отдельные файлы.

## Webpack + PUG

<p>
    <img src="https://user-images.githubusercontent.com/22715126/140086271-af88f7e3-8b91-41ed-8d7b-d348d62f8f61.png" height="80" title="Webpack" alt="Webpack">
    &nbsp;&nbsp;&nbsp;&nbsp;
    <img src="https://user-images.githubusercontent.com/22715126/140083253-4e5b9ffa-b339-4f78-b583-7f87535e7d40.png" height="80" title="Pug" alt="Puh">
</p>

### Установка

1. Скачать папку [webpack-pug](https://github.com/saimon322/frontend-builder-rules/tree/master/webpack-pug) с текущего репозитория
2. Провести стартовую [развертку проекта](#развертка-проекта)

### Команды

Packages install / dev / prod:
```shell
yarn
yarn dev
yarn build
```

### Структура

![image](https://user-images.githubusercontent.com/7847378/142730606-345e8cc8-c89d-46db-a400-6f8bc9e6554e.png)

Сборка отличается от стандартной несколькими вещами:
1. Шаблонизатор [PUG](https://gist.github.com/neretin-trike/53aff5afb76153f050c958b82abd9228) (инструкция по ссылке)
2. Роутинг скриптов по страницам.

Название JS файл должно быть таким же как и класс тега body на странице. 

![image](https://user-images.githubusercontent.com/7847378/142730783-2e557b73-ab34-4bb2-a02b-50238f6bd0a1.png)

Не забываем подключить его в общмй `assets/js/index.js`

![image](https://user-images.githubusercontent.com/7847378/142731251-731c5bcc-a819-4d2e-841c-b7390790a598.png)

В папке `assets/js/routes` можно создать подпапку с названием страницы и помещать в нее файлы скриптов, относящиеся только к ней.
К примеру, на главной имеется меню, не повторяющееся на сайте, поэтому создаем файл `menu.js` в папке `assets/js/routes/home`

![image](https://user-images.githubusercontent.com/7847378/142731415-09f33aef-1ef2-40ef-b4a7-fbb95b7c68f1.png)

и подключаем его в `home.js`, соответственно.

![image](https://user-images.githubusercontent.com/7847378/142731443-42755f35-bd02-458b-863e-14121606f749.png)

Общие файлы скриптов для всего сайта создаем в папке `assets/js/utils` и подключаем в `assets/js/routes/common.js`,

![image](https://user-images.githubusercontent.com/7847378/142731580-a76b2f6a-f008-4a39-91a9-114575bf663a.png)

## Дополнения

### Библиотеки

Ниже приведен список наиболее часто используемых библиотек со ссылкой на документацию и командой для установки.

- [Swiper](https://swiperjs.com/swiper-api) `npm i swiper` – для лучших слайдеров
- [Fancybox](https://fancyapps.com/docs/ui/quick-start/) `npm i @fancyapps/ui` – для лучших модальных окон и галерей
- [Gsap](https://github.com/greensock/GSAP) `npm i gsap` – для лучших анимаций и параллаксов
- [Imask](https://imask.js.org/guide.html) `npm i imask` – для лучших масок форм
- [Fullpage](https://github.com/alvarotrigo/fullpage.js) `npm i fullpage.js` – для лучшего поэкранного скролла
- [SortableJS](https://github.com/SortableJS/Sortable) `npm i sortablejs` – для лучшиих drag-and-drop списков

### Готовые решения

Папка [hacks](https://github.com/saimon322/frontend-builder-rules/tree/master/hacks) данного репозитория содержит готовые решения с реализациями различных компонентов сайта без использования библиотек

### Изменения в node_modules

Иногда при использовании пакетов из node_modules невозможно переопределить какие-то вещи. Например, скрипт библиотеки, зашитый в eventListener. В таких случаях приходится напрямую переписать несколько строк в node_modules. Но вопрос в том, как сохранить изменения зависимостей для конкретного проекта, если они всегда лежат в гитгноре и устанавливаются каждым разработчиком с нуля?

Здесь нам на помощь приходит библиотека [path-package](https://github.com/ds300/patch-package)

Порядок использования следующий:

1. Устанавливаем пакет `patch-package` (с помощью `npm` или `yarn`):

        npm i patch-package

        yarn add patch-package postinstall-postinstall
        
2. Добавляем вызов `path-package`  в package.json:

    ```diff
     "scripts": {
    +  "postinstall": "patch-package"
     }
    ```

3. Вносим необходимые изменения напрямую в node_modules

4. Запускаем из консоли команду `patch-package`, указав имя измененной библиотеки:

        (npx | yarn) patch-package package-name
    
    Например, для библиотеки wowjs при использовании npm команда следующая:
    
        npx patch-package wowjs
        
    Эта команда создаст .patch файл в папке patches/, который будет содержать разницу между официальной библиотекой и измененной версией.

5. Коммитим все изменения, включая package.json и новый .patch файл 

Отлично, изменение пакета попало в репозиторий. Т

еперь, чтобы при установке зависимостей применились наши изменения, остается запустить команду `postinstall`. 

Поэтому в `README.md` проекта дописываем инструкцию для установки зависимостей (`npm` / `yarn`):
    
```diff
 npm i
+  npm run postinstall
```
    
или

```diff
 yarn
+  yarn postinstall
```
    
