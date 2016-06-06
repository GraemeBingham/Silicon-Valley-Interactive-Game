var gulp = require('gulp'),
    gutil = require('gulp-util'),
    compass = require('gulp-compass'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    haml = require('gulp-ruby-haml');

var sassSources = ['components/sass/style.scss'];

gulp.task('log', function() {
    gutil.log('Workflows are awesome!')
});

gulp.task('compass', function() {
    gulp.src(sassSources)
      .pipe(plumber())
      .pipe(compass({
      	sass: 'components/sass',
      	image: 'builds/development/images',
      	style: 'expanded',
      }))
      .on('error', gutil.log)
      .pipe(autoprefixer('last 2 versions'))
      .pipe(gulp.dest('builds/development/css'))
      .pipe(reload({stream: true}));
});

gulp.task('haml', function() {
	gulp.src('components/haml/*.haml')
        .pipe(plumber())
	      .pipe(haml())
        .on('error', gutil.log)
	      .pipe(gulp.dest('builds/development/'))
	      .pipe(reload({stream: true}));
});

gulp.task('serve',['compass','haml'], function() {

    browserSync.init({
      server: {
            baseDir: "builds/development/"
        }
    });

    gulp.watch('components/sass/*.scss', ['compass']);
    gulp.watch('components/haml/*.haml', ['haml']).on('change', browserSync.reload);
    gulp.watch('builds/development/js/*.js', ['haml']).on('change', browserSync.reload);
});
