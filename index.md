---

layout: default

---

# Яндекс

## **{{ site.presentation.title }}** {#cover}

<div class="s">
    <div class="service">{{ site.presentation.service }}</div>
</div>

{% if site.presentation.nda %}
<div class="nda"></div>
{% endif %}

<div class="info">
	<p class="author">{{ site.author.name }}, <br/> {{ site.author.position }}</p>
</div>

## &nbsp;
{:.section}

### Ресурсы компьютера

## Ресурсы компьютера

* ...CPU
* ...Оперативная память
* ...Диск
* ...Сеть

## Операции

* ...CPU bound
    * ...Вычисление числа Фибоначчи
    * ...Рендеринг изображений
    * ...Шаблонизация данных
* ...I/O bound
    * ...Подсчет количества строк в файле
    * ...Получение IP-адреса под домену
    * ...Запрос в базу данных

## Веб-приложения

| Действие                  | Тип операции |
+---------------------------|--------------+
| Чтение HTTP-запроса       |              |
|---------------------------|--------------|

## Веб-приложения

| Действие                  | Тип операции |
+---------------------------|--------------+
| Чтение HTTP-запроса       | I/O          |
|---------------------------|--------------|

## Веб-приложения

| Действие                  | Тип операции |
+---------------------------|--------------+
| Чтение HTTP-запроса       | I/O          |
|---------------------------|--------------|
| Парсинг HTTP-запроса      |              |
|---------------------------|--------------|

## Веб-приложения

| Действие                  | Тип операции |
+---------------------------|--------------+
| Чтение HTTP-запроса       | I/O          |
|---------------------------|--------------|
| Парсинг HTTP-запроса      | CPU          |
|---------------------------|--------------|

## Веб-приложения

| Действие                  | Тип операции |
+---------------------------|--------------+
| Чтение HTTP-запроса       | I/O          |
|---------------------------|--------------|
| Парсинг HTTP-запроса      | CPU          |
|---------------------------|--------------|
| Запрос в базу данных      |              |
|---------------------------|--------------|

## Веб-приложения

| Действие                  | Тип операции |
+---------------------------|--------------+
| Чтение HTTP-запроса       | I/O          |
|---------------------------|--------------|
| Парсинг HTTP-запроса      | CPU          |
|---------------------------|--------------|
| Запрос в базу данных      | I/O          |
|---------------------------|--------------|

## Веб-приложения

| Действие                  | Тип операции |
+---------------------------|--------------+
| Чтение HTTP-запроса       | I/O          |
|---------------------------|--------------|
| Парсинг HTTP-запроса      | CPU          |
|---------------------------|--------------|
| Запрос в базу данных      | I/O          |
|---------------------------|--------------|
| Запрос во внешние сервисы |              |
|---------------------------|--------------|

## Веб-приложения

| Действие                  | Тип операции |
+---------------------------|--------------+
| Чтение HTTP-запроса       | I/O          |
|---------------------------|--------------|
| Парсинг HTTP-запроса      | CPU          |
|---------------------------|--------------|
| Запрос в базу данных      | I/O          |
|---------------------------|--------------|
| Запрос во внешние сервисы | I/O          |
|---------------------------|--------------|

## Веб-приложения

| Действие                  | Тип операции |
+---------------------------|--------------+
| Чтение HTTP-запроса       | I/O          |
|---------------------------|--------------|
| Парсинг HTTP-запроса      | CPU          |
|---------------------------|--------------|
| Запрос в базу данных      | I/O          |
|---------------------------|--------------|
| Запрос во внешние сервисы | I/O          |
|---------------------------|--------------|
| Генерация разметки        |              |
|---------------------------|--------------|

## Веб-приложения

| Действие                  | Тип операции |
+---------------------------|--------------+
| Чтение HTTP-запроса       | I/O          |
|---------------------------|--------------|
| Парсинг HTTP-запроса      | CPU          |
|---------------------------|--------------|
| Запрос в базу данных      | I/O          |
|---------------------------|--------------|
| Запрос во внешние сервисы | I/O          |
|---------------------------|--------------|
| Генерация разметки        | CPU          |
|---------------------------|--------------|

## Веб-приложения

| Действие                  | Тип операции |
+---------------------------|--------------+
| Чтение HTTP-запроса       | I/O          |
|---------------------------|--------------|
| Парсинг HTTP-запроса      | CPU          |
|---------------------------|--------------|
| Запрос в базу данных      | I/O          |
|---------------------------|--------------|
| Запрос во внешние сервисы | I/O          |
|---------------------------|--------------|
| Генерация разметки        | CPU          |
|---------------------------|--------------|
| Отправка ответа           |              |
+---------------------------|--------------+

## Веб-приложения

| Действие                  | Тип операции |
+---------------------------|--------------+
| Чтение HTTP-запроса       | I/O          |
|---------------------------|--------------|
| Парсинг HTTP-запроса      | CPU          |
|---------------------------|--------------|
| Запрос в базу данных      | I/O          |
|---------------------------|--------------|
| Запрос во внешние сервисы | I/O          |
|---------------------------|--------------|
| Генерация разметки        | CPU          |
|---------------------------|--------------|
| Отправка ответа           | I/O          |
+---------------------------|--------------+

## Как быть?

* Многопоточность
  * ...Переключение контекста не бесплатное
  * ...При росте количества растут накладные расходы
  * ...Управление общими ресурсами

## Как быть?

* Очередь событий
  * ...Приложение запрашивает ресурс в неблокирущем режиме
  * ...Приложение продолжает работу
  * ...При готовности ресурса ОС оповестит приложение

## &nbsp;
{:.section}

### Что такое Node.js?

## Платформа для разработки приложений

* libuv
    * Неблокирующий I/O
    * Кроссплатформенность
* Корневая библиотека
    * Множество модулей для взаимодействия с ОС

## Среда выполнения JavaScript

* Интерпретатор V8
    * ...Just In Time компиляция в машинный код
    * ...Оптимизации в рантайме
    * ...Эффективная сборка мусора

## JavaScript

* Создан в пользовательских интерфейсах
* Анонимные функции и замыкания
* Готов к Event Loop

## Блокирующий ввод/вывод

~~~javascript
var fs = require('fs');

console.log('A');

var content = fs.readFileSync('file.txt');

console.log('B', content);
~~~

## Неблокирующий ввод/вывод

~~~ javascript
var fs = require('fs');

console.log('A');

fs.readFile('file.txt', function (error, content) {
    if (error) {
        return console.error(error);
    }

    console.log('C', content);
});

console.log('B');
~~~

## &nbsp;
{:.section}

### Механизмы работы с асинхронными вызовами

## Callback

~~~ javascript
function callback(error, content) {
    if (error) {
        return console.error(error);
    }

    console.log(content);
}

var fs = require('fs');

fs.readFile('file.txt', callback);
~~~

## События

~~~ javascript
var fs = require('fs');
var readStream = fs.createReadStream('file.txt');

readStream
    .on('data', function (chunk) {
        console.log('Chunk:', chunk);
    })
    .on('end', function () {
        console.log('End');
    });
~~~

## Пример с WebSocket

~~~ javascript
var socket = new WebSocket('ws://host.com');

socket.addEventListener('open', function () {
    console.log('Opened');
});

socket.addEventListener('message', function (event) {
    console.log('Data received:', event.data);
});
~~~

## Promise

~~~ javascript
function getFilePromise(filename) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, function (error, content) {
            if (error) {
                return reject(error);
            }

            resolve(content);
        });
    });
}
~~~

## Используем Promise

~~~ javascript
getFilePromise('file.txt')
    .then(function (content) {
        console.log('File content:', content);
    })
    .catch(function (error) {
        console.error(error);
    });
~~~

## Два вызова без Promise

~~~ javascript
fs.readFile('file.txt', function (error, content) {
    if (error) {
        return console.error(error);
    }

    console.log('First file content:', content);

    fs.readFile('file1.txt', function (error, content) {
        if (error) {
            return console.error(error);
        }

        console.log('Second file content:', content);
    });
});
~~~

## Два вызова с Promise

~~~ javascript
getFilePromise('file.txt')
    .then(function (content) {
        console.log('First file content:', content);

        return getFilePromise('file1.txt');
    })
    .then(function (content) {
        console.log('Second file content:', content);
    })
    .catch(function (error) {
        console.error(error);
    })
    .then(function () {
        console.log('End');
    });
~~~

## Параллельные вызовы с Promise

~~~ javascript
var filenames = [
    'file.txt',
    'file1.txt',
    ...,
    'fileN.txt'
];

var promises = filenames.map(function (filename) {
    return getFilePromise(filename);
});

Promise.all(promises)
    .then(function (filesContent) {
        console.log('Files content:', filesContent);
    })
    .catch(function (error) {
        console.error(error);
    });
~~~

## &nbsp;
{:.section}

### Buffer

## Buffer

~~~ javascript
var buffer = new Buffer(255);
buffer[0] = 23;

fs.readFile('file.txt', function (error, buffer) {
    Buffer.isBuffer(buffer); // true
    console.log(buffer); // <Buffer 68 65 6c 6c 6f>
    buffer.toString('utf-8'); // 'hello'
    buffer.toString('base64'); // 'aGVsbG8='
});
~~~

## &nbsp;
{:.section}

### EventEmitter

## EventEmitter

~~~ javascript
var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

emitter.on('event', function (data) { console.log(data) });
emitter.once('event', function (data) { console.log('once', data) });

emitter.emit('event', {hello: 'world'});

emitter.removeAllListeners('event');
~~~

## &nbsp;
{:.section}

### Stream

## &nbsp;
{:.section}

### Child process

## **Контакты** {#contacts}

<div class="info">
<p class="author">{{ site.author.name }}</p>
<p class="position">{{ site.author.position }}</p>

    <div class="contacts">
        <!-- <p class="contacts-left contacts-top phone">+7 (000) 000-00-00</p> -->
        <p class="contacts-left mail">alex-vee@yandex-team.ru</p>
        <p class="contacts-right contacts-top twitter">@verkholantsev</p>
        <!-- <p class="contacts-right contacts-bottom vk">vk</p> -->
        <p class="contacts-right facebook">verkholantsev</p>
    </div>
</div>
