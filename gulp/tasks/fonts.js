import fs from 'fs';
import fonter from 'gulp-fonter-fix';
import ttf2woff2 from 'gulp-ttf2woff2';

  export const otfTottf = () => {
    //Шукаємо файли шрифтов .otf 
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`,{})
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title:"Fonts",
        message: "Error: <%= error.message %>"
      }))
    )
    //Конвертуємо в .ttf
    .pipe(fonter({
      formats:['ttf']
    }))
    //Вигружаємо в исходную папку
    .pipe(app.gulp.dest('${app.path.srcFolder}/fonts/'))
  }

  export const ttfToWoff = () => {
    //Шукаємо файли шрифтів .ttf
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title:"Fonts",
        message:"Error: <%= error.message %>"
      }))
    )
      //Конвертуємо в .woff
      .pipe(fonter({
        formats:['woff']
      }))
      //Вигружаємо в папку з результатом
      .pipe(app.gulp.dest(`${app.path.build.fonts}`))
      //Шукаємо файли шрифтов .ттф
    .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
      //Конвертуємо в вофф2
      .pipe(ttf2woff2())
      //Вигружаємо в папку з результатом
      .pipe(app.gulp.dest(`${app.path.build.fonts}`));
  }
  export const fontsStyle = () =>{
    //Файл стилей подключения шрифтов 
    let fontsFile =`${app.path.srcFolder}/sccs/font.scss`;
    //Провіряємо чи існує цей файл шрифтов
    fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
      if(fontsFiles){
        //Провіряємо чи існує цей файл стилей для підключення шрифтов
        if(!fs.existsSync(fontsFile)){
          //Якщо файла немає то створюємо його 
          fs.writeFile(fontsFile, '', cb);
          let newFileOnly;
          for(var i=0; i< fontsFiles.length; i++){
            //Записуємо підключення шрифтів в файл стилей
            let fontFileName = fontsFiles[i].split('.')[0];
            if(newFileOnly !== fontFileName){
              let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
              let fontWight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;
              if(fontWight.toLoverCase()==='thin'){
                fontWight = 100;
              }else if (fontWight.toLoverCase()==='extralight'){
                foontWeight=200;
              } else if (fontWight.toLoverCase() ==='light'){
                fontWight=300;
              } else if (fontWight.toLoverCase() ==='medium'){
                fontWight=500;
              } else if (fontWight.toLoverCase() ==='semibold'){
                fontWight=600;
              } else if (fontWight.toLoverCase() ==='bold'){
                fontWight=700;
              } else if (fontWight.toLoverCase() ==='extrabold' || fontWeight.toLoverCase()==='heavy'){
                fontWight=800;
              } else if (fontWight.toLoverCase() ==='black'){
                fontWight=900;
              }else{
                fontWight=400;
              }
              fs.appendFile(fontsFile,
                `font-face{
                  font-family:${fontName};
                  font-display:swap;
                  src:url("../font/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName});
                  font-weight:${fontWight};
                  font-style:normal;

                }\r\n`,cb);

                newFileOnly = fontFileName;
            }
          }
        }else{
          //Якщо файл э виводимо повідомлення 

          console.log("Файл scss/fonts.scss уже існує.Для обновлення потрібно його удалити");
        }
      }
    });
    return app.gulp.src(`${app.path.srcFolder}`);
    function cb(){ }
  }