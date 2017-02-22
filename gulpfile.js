const gulp = require('gulp');
const connect = require('gulp-connect');
const cached = require('gulp-cached');
const sass = require('gulp-sass');
const inject = require('gulp-inject');
const proxymiddleware = require('http-proxy-middleware');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');

const config = require('./config.json');
const assets = require('bower-files')(config.bowerConfig);


gulp.task('server', function () {
  connect.server({
    root: config.app.root,
    port: 8000,
    livereload: true,
    fallback: config.app.fallback,
    middleware: function () {
      apiProxy = proxymiddleware('/api', {
        target: 'http://localhost:7000',
        pathRewrite: {'^/api': ''}
      });
      return [apiProxy];
    }
  })
})

gulp.task('bower:js', function () {
  return gulp.src(assets.ext('js').files)
    .pipe(gulp.dest(config.lib.js))
})

gulp.task('bower:css', function () {
  return gulp.src(assets.ext(['css', 'scss']).files)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.lib.css))
})

gulp.task('bower:fonts', function () {
  return gulp.src(assets.ext(['eot', 'woff', 'woff2', 'ttf', 'svg']).files)
    .pipe(gulp.dest(config.lib.fonts))
})

gulp.task('bower', gulp.parallel('bower:js', 'bower:css', 'bower:fonts'))

gulp.task('inject', function () {
  var root = config.app.root

  return gulp.src(config.app.index)
    .pipe(inject(gulp.src(config.app.injectorder), {
      ignorePath: root,
      addRootSlash: false
    }))
    .pipe(gulp.dest(root))
})

gulp.task('clean', function (done) {
  var to_delete = [
    './app/**/*.css',
    './app/**/*.map',
    './app/lib'
  ]
  return del(to_delete)
})

gulp.task('watch', function () {
  return gulp.watch(config.app.sass, gulp.series('compile', 'inject'))
})

gulp.task('compile', function () {
  return gulp.src(config.app.sass)
    .pipe(cached('sass'))
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.app.root))
})

gulp.task('build', gulp.series('clean', 'bower', 'compile', 'inject'))

gulp.task('default', gulp.series('build', gulp.parallel('server', 'watch')))
