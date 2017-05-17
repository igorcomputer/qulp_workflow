

Команды установки для Gulp (http://gulpjs.com/):

npm install gulp-cli -g
npm install gulp -D
touch gulpfile.js
gulp --help


Установим модули:

npm i <имя модуля> --save-dev

Список модулей: 

var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css'); 
var rename = require("gulp-rename"); 
var notify = require("gulp-notify");