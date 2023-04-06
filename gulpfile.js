//Основний модуль
import gulp from "gulp";
//імпорт путей
import { path } from "./gulp/config/path.js";
//Імпорт общих плагинов
import {plugins} from "./gulp/config/plugins.js";

//Передаємо значення в глобальну змінну
global.app={
  // isBuild:proces.argv.inludes('--build'),
  // isDev: !process.argv.includes('--build'),
  path:path,
  gulp:gulp,
  plugins:plugins
}
//импорт задач
import {copy} from "./gulp/tasks/copy.js";
import {reset} from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
// import { html } from "./gulp/tasks/about.js";
import {server} from "./gulp/tasks/server.js";
import {scss} from "./gulp/tasks/scss.js";
import {js} from "./gulp/tasks/js.js";
import {images} from "./gulp/tasks/images.js";
import { fontsStyle, otfTottf, ttfToWoff } from "./gulp/tasks/fonts.js";
// import {otfTottf,ttfToWoff,fontsStyle} from "./gulp/tasks/fonts.js";
import {svgSpive} from "./gulp/tasks/svgSprive.js";
import {zip} from "./gulp/tasks/zip.js";
import {ftp} from "./gulp/tasks/ftp.js"; 
import browserSync from "browser-sync";
//наблюдатель за зміною в файлах
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
}
export {svgSpive}
const fonts = gulp.series(otfTottf, ttfToWoff, fontsStyle);



//основны задачі
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));

//построения сценаріїв виповнення задач
const dev = gulp.series(reset,mainTasks, html, gulp.parallel(watcher, server));
const deployZIP= gulp.series(reset,mainTasks,zip);
const deployFTP=gulp.series(reset,mainTasks,ftp);

//виповнення сценарыъв по замовчуванню
gulp.task('default', dev);

//Єкспорт сценаріїв
export {deployZIP}
export{deployFTP}
// gulp.task('scripts', function () {
//   return gulp.src([])

//   'app/libs/mixitup/jquery.mixitup.js'
// });