// import mixitup from 'mixitup';
import *as nodePath from  'path';
const rootFolder = nodePath.basename(nodePath.resolve());


const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
  build:{
    mixitup:`${buildFolder}/js/`,
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    images:`${buildFolder}/img/`,
    fonts:`${buildFolder}/fonts/`,
    files: `${buildFolder}/files/`
  },
  src: {
    mixitup:`${srcFolder}/js/app.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg:`${srcFolder}/img/**/*.svg`,
    js: `${srcFolder}/js/app.js`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`,
    svgicons: `${srcFolder}/svgicons/*.svg`,
    files: `${srcFolder}/files/**/*.*`,
    
  },
  watch:{
    mixitup: `${srcFolder}/js/**/*.js`,
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
    files: `${srcFolder}/files/**/*.*`
  },
  clean: buildFolder,
  buildFolder:buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  
  ftp:``//папку яку треба на фтп
 
}