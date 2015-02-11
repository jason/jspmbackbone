var gulp = require('gulp'),
browserSync = require('browser-sync'),
jshint = require('gulp-jshint'),
minifycss = require('gulp-minify-css'),
concat = require('gulp-concat'),
sass = require('gulp-sass'),
notify = require("gulp-notify"),
browserSync = require('browser-sync'),
rename = require('gulp-rename'),
server = require('gulp-serve'),
uglify = require('gulp-uglify');


gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: __dirname
    }
  });
});

gulp.task('server', server(__dirname));
/*gulp.task('takana', function() {
  takana.run({
  path: __dirname,
  includePaths: ['']
  });
});*/

gulp.task('scripts', function() {
  return gulp.src('./src/js/*.js')
  .pipe(concat('main.js'))
  .pipe(gulp.dest('dist/js'))
  .pipe(rename({suffix: '.min'}))
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'));
});

gulp.task('styles', function() {
  return gulp.src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('./dist/css'))
    .pipe(notify({ message: "styles complete"}))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('watch', function() {

});

gulp.task('default', ['styles', 'serve'], function() {
  gulp.watch(['./src/scss/*.scss'], ['styles']);
  gulp.watch(['./src/js/*.js'], ['scripts']);
  gulp.watch(['./*.html'], [browserSync.reload]);
});
