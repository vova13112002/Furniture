//Імпорт
import replace  from "gulp-replace";//Пошук в замінах
import plumber from "gulp-plumber";//оброка помилок
import notify from "gulp-notify";//Собщения(подсказка)
import browsersync from "browser-sync";//Локальний сервер
import newer from "gulp-newer"//проверка обновления 
import ifPlugin from "gulp-if";//Условние ветвления
// import mixitup from "mixitup";
// import $ from "jquery";
// import '../../node_modules/slick-carousel/slick/slick.scss';
//Експорт об'єктів
export const plugins = {
  replace:replace,
  plumber:plumber,
  notify:notify,
  browsersync:browsersync,
  // mixitup:mixitup,
  newer:newer,
  if:ifPlugin
}