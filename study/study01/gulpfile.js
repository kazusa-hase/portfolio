
var gulp = require('gulp');

// Compile
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var plumber = require('gulp-plumber');

// Autoprefixer
var postcss = require("gulp-postcss");
var postcssGapProperties = require("postcss-gap-properties");
var autoprefixer = require("autoprefixer");

// Bundle
var webpackStream = require('webpack-stream');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');

// Real time preview
var browserSync = require('browser-sync');

// Image compression
var imgMin = require('gulp-imagemin');
var imgMin_jpg = require('imagemin-mozjpeg');
var imgMin_png = require('imagemin-pngquant');
var imgMin_gif = require('imagemin-gifsicle');
var imgMin_svg = require('imagemin-svgo');

// Only pass through changed files
var changed = require('gulp-changed');



/* Compile
-------------------------------------------------------*/
gulp.task('sass', () => {
  return gulp.src('src/sass/style.scss')
    .pipe(plumber())
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(postcss([
      postcssGapProperties(),
      autoprefixer({
        // ☆IEは11以上、Androidは4.4以上
        // その他は最新2バージョンで必要なベンダープレフィックスを付与する設定
        browsers: ["last 2 versions", "ie >= 11", "Android >= 4"],
        cascade: false
      })
    ]))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('pug', () => {
  return gulp.src('src/html/index.pug')
    .pipe(plumber())
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({stream:true}));
});

// gulp.task('js', () => {
//   return gulp.src('src/js/index.js')
//     .pipe(plumber())
//     .pipe(gulp.dest('dist/js'))
//     .pipe(browserSync.reload({stream:true}));
// });

gulp.task('js', () => {
  return webpackStream(webpackConfig, webpack)
  .pipe(plumber())
  .pipe(gulp.dest('dist/js'))
  .pipe(browserSync.reload({stream:true}));
});

/* Image compression
-------------------------------------------------------*/
gulp.task('imagemin', () => {
  return gulp.src('src/img/**/*')
    .pipe(changed('dist/img'))
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
    .pipe(gulp.dest('dist/img'));
});



gulp.task('default', gulp.series(gulp.parallel('sass', 'pug', 'js', 'imagemin'), () => {
  gulp.watch('src/sass/**/*.scss', gulp.task('sass'));
  gulp.watch('src/html/**/*.pug', gulp.task('pug'));
  gulp.watch('src/js/**/*.js', gulp.task('js'));
  browserSync({ server: { baseDir: 'dist' } });
}));
