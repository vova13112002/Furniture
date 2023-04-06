import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import gulpWebpHtmlNosvg from 'gulp-webp-html-nosvg';


import cleanCss from 'gulp-clean-css';//Сжаття CSS файлів
import webpcss from 'gulp-webpcss';//Вивод вебп зображення
import autoprefixer from 'gulp-autoprefixer';//Добавлення вендорних префиксов
import groupCssMediaQuaries from 'gulp-group-css-media-queries';//групировка медиа запросов



const sass = gulpSass(dartSass);

export const scss = () => {

  return app.gulp.src(app.path.src.scss, {sourcemaps:true})
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: "SCSS",
      message: "Error: <%= error.message %>"
    })))

    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    
    
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(groupCssMediaQuaries())
    .pipe(webpcss({
      webClass: ".webp",
      noWebpClass:"no-webp"
    }
    ))
    .pipe(autoprefixer({
      grid:true,
      overrideBrowserslist:["last 3 versions"],
      cascade:true
    }))
    //Розкоментуватися якщо потрібно не сжатий дубль файла стилей
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(cleanCss())
    .pipe(rename({
      extname: ".min.css"
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream());
}