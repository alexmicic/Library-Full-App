// modules ===============
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del')
var runSequence = require('run-sequence');

// tasks =================
// create scss --> css conversion
gulp.task('sass', function () {
    return gulp.src('app/frontend/public/scss/**/*.scss')
        .pipe(sass()) // convert all the files from .scss to .css
        .pipe(gulp.dest('app/frontend/public/css'))
});

// create live reload task
/*browserSync.create();
gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'app_front'
        }
    });
});*/

// create watch task to watch for the changes
gulp.task('watch', ['sass'], function () {
    gulp.watch('app/frontend/public/scss/**/*.scss', ['sass']);
    // other watchers
    // reloads the browser whenever HTML or JS files get changed
    //gulp.watch('app_front/*.html', browserSync.reload);
    //gulp.watch('app_front/**/*.js', browserSync.reload);
});

// concatenate and minimize files
gulp.task('useref', function () {
    return gulp.src('app/frontend/*.html')
        //.pipe(useref())
        // minify .js files
        .pipe(gulpif('*.js', uglify()))
        // minify css files
        .pipe(gulpif('*.css', cssnano()))
        .pipe(gulp.dest('dist/frontend'))
});

// copy backend folder
//gulp.task('backend', function () {
    //return gulp.src('app/backend/**/*')
        //.pipe(gulp.dest('dist/backend'))
//});

// copy frontend folder
gulp.task('front', function () {
    return gulp.src('app/frontend/**/*')
        .pipe(gulp.dest('dist/frontend'))
});

// use of gulp-imagemin to optimize the images [png, jpg, gif, svg]
gulp.task('images', function () {
    return gulp.src('app/frontend/public/images/**/*.+(png|jpg|gif|svg)')
        .pipe(cache(imagemin({
            // setting interlaced to true
            interlaced: true
        })))
        .pipe(gulp.dest('dist/frontend/public/images'))
});

// cleaning up generated files automatically
gulp.task('clean:dist', function () {
    return del.sync('dist');
});

// main gulp tasks for building the project
gulp.task('build', function (callback) {
    runSequence('clean:dist',
        ['sass', 'useref', 'images', 'front'],
        callback
    )
});

// default gulp task
gulp.task('default', function (callback) {
    runSequence(['sass', 'watch'], callback)
});