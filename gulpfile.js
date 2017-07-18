var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    spritesmith = require('gulp.spritesmith'),
    sourcemaps = require('gulp-sourcemaps');


// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "dev"
        }
    });
});

gulp.task('concat', function () {
  return gulp.src(paths.js.location)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dev/js'));
});


gulp.task('sprite', function() {
  var spriteData = gulp.src('dev/img/icons/*.png')
    .pipe(spritesmith({
      imgName: 'sprite.png',
      imgPath: '../img/sprite.png',
      cssName: 'sprite.scss'
    }));
  spriteData.img.pipe(gulp.dest('dev/img'));
  spriteData.css.pipe(gulp.dest('dev/scss'))
});


var paths = {
  js: {
    location: [
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/swiper/dist/js/swiper.jquery.min.js',
      'dev/js/jquery.maskedinput.min.js',
      'dev/js/owl.carousel.min.js',
      'dev/js/main.js'
    ],
    destination: 'dev/js'
  }

};

gulp.task('watch', function () {
  gulp.watch('dev/js/**/*.js', ['concat']);
  gulp.watch([
    'dev/*.html',
    'dev/css/**/*.css',
    'dev/js/**/*.js'
  ]).on("change", browserSync.reload);
});

gulp.task('default', [
  'browser-sync',
  'sprite',
  'concat',
  'watch'

]);