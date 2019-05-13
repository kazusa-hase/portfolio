
const gulp = require('gulp');

// Compile
const sass = require('gulp-sass');
//const pug = require('gulp-pug');

// Sass glob
const sassGlob = require('gulp-sass-glob');

// Autoprefixer
const postcss = require("gulp-postcss");
const postcssGapProperties = require("postcss-gap-properties");
const autoprefixer = require("autoprefixer");

// Sort CSS propaty 
const cssdeclsort = require('css-declaration-sorter');

// Bundle
// const webpackStream = require('webpack-stream');
// const webpack = require('webpack');
// const webpackConfig = require('./webpack.config');

// Real time preview
const browserSync = require('browser-sync');
const plumber = require('gulp-plumber');

// Image compression
const imgMin = require('gulp-imagemin');
const imgMin_jpg = require('imagemin-mozjpeg');
const imgMin_png = require('imagemin-pngquant');
const imgMin_gif = require('imagemin-gifsicle');
const imgMin_svg = require('imagemin-svgo');

// Only pass through changed files
const changed = require('gulp-changed');


/* Compile
-------------------------------------------------------*/
gulp.task('sass', () => {
  return gulp.src('common/sass/style.scss')
    .pipe(plumber())
    .pipe(sassGlob())
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(postcss([
      postcssGapProperties(),
      autoprefixer({
        // ☆IEは11以上、Androidは4.4以上
        // その他は最新2バージョンで必要なベンダープレフィックスを付与する設定
        browsers: ["last 2 versions", "ie >= 11", "Android >= 4"],
        cascade: false
      }),
      cssdeclsort({order: 'alphabetically'})
    ]))
    .pipe(gulp.dest('common/css'))
    .pipe(browserSync.reload({stream:true}));
});



/* Image compression
-------------------------------------------------------*/
gulp.task('imgmin', () => {
  return gulp.src('common/img/*')
    .pipe(changed('common/img/*'))
    .pipe(imgMin([
      imgMin_jpg(),
      imgMin_png(),
      imgMin_gif({
        optimizationLevel: 3,
        colors:256
      }),
      imgMin_svg({
				plugins: [ {removeViewBox: false} ]
			})
    ]))
    .pipe(gulp.dest('common/img'));
});


/* Local Server
-------------------------------------------------------*/

gulp.task('browserSync', () => {
  browserSync({
    server: {
        index  : "index.html" 
    }
  });
});


/* Default
-------------------------------------------------------*/

gulp.task('default', gulp.series(gulp.parallel('sass'), () => {
  gulp.watch('common/sass/**/*.scss', gulp.task('sass'));
}));
