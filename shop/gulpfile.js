
const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat-css');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');


function styles() {
    return gulp.src('src/styles/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concat('style.css'))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(gulp.dest('build/css'));
}

function images() {
    return gulp.src('src/img/*')
        .pipe(gulp.dest('build/img'))
}

function pages() {
    return gulp.src('*.html')
        .pipe(gulp.dest('build/'))
}

//Таски для вызова функций
gulp.task('styles', styles);
gulp.task('images', images);
gulp.task('pages', pages);

//Таск запускает таск build и watch последовательно
gulp.task('run', gulp.series('styles','images', 'pages'));