
Старт проекта NPM:
==================================================
npm init          // Инициализация проекта (создание package.json)
npm install       // Установка пакетов, прописанных в файле package.json (dependencies, devDependencies) 

Установка модулей NPM:
==================================================
Лакально  - в папку node_modules в текущий каталог 
Глобально - в папку node_modules в папку пользователя

npm i <имя модуля> -g             // Глобально
npm i <имя модуля>                // Лакально без записи в package.json 
npm i <имя модуля> --save         // Локально с записью в package.json (dependencies) 
npm i <имя модуля> --S            // --- сокращенная запись   
npm i <имя модуля> --save-dev	  // Локально с записью в package.json (devDependencies)
npm i <имя модуля> --D            // --- сокращенная запись   

Команды Gulp (http://gulpjs.com):
==================================================

Установка:
--------------------------------------------------
npm install gulp-cli -g
npm install gulp -D
touch gulpfile.js
gulp --help

Команды Bower (https://bower.io):
==================================================

npm install bower -g    // Установка (Глобально) 

bower init              // Интерактивное создание конфига bower.json  

bower -v                // Версия 
bower search jquery     // Поиск
bower s jquery			// Поиск (сокращенно) 

bower info jquery       // Детальная информация о библиотеке

Установка библиотек: (по умолчанию в папку bower_components текущего каталога) 
--------------------------------------------------

// Синтаксис: 
bower install <package>  
bower i <package>        // Сокращенный синтаксис 

// Ключи (чтобы отметить зависимости в bower.json) 
-S, --save
-D, --save-dev

// Примеры установки библиотек 
bower install jquery#1.6.4 --save // определенной версии  
bower i normalize.css
bower install https://code.jquery.com/jquery-3.2.1.min.js

bower list                    // Просмотр списка установленных библиотек 
bower list --path             // Получение ссылок на уже скаченные библиотеки 

bower uninstall jquery-3.2.1 --save // Удаление библиотеки (отмечаем запись в bower.json) 
bower list                    // Проверим что удалили (выведем список) 








