const {src, dest, watch, parallel, series} = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const browsersync = require("browser-sync").create();
const fileinclude = require('gulp-file-include');
const hashsrc = require("gulp-hash-src");

const browserSync = done => {
  browsersync.init({
    server: {
      baseDir: "./build/",
      tunnel: true
    },
    port: 3000
  });
  done();
};

const scripts = () => {
  return src('src/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: [['@babel/preset-env']]
    }))
    .pipe(concat('index.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/js'))
    .pipe(browsersync.stream());
};

const vendor = () => {
  return src('src/vendor/**')
    .pipe(dest('build/vendor'))
    .pipe(browsersync.stream());
};

const styles = () => {
  return src('src/scss/index.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/css'))
    .pipe(browsersync.stream());
};

const generateHtml = () => {
  return src([
    'src/html/**',
    '!src/html/components/**'
  ])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(dest('build'))
    .pipe(browsersync.stream());
};

const sendImages = () => {
  return src('src/images/*')
    .pipe(dest('build/images'))
    .pipe(browsersync.stream());
};

const sendFonts = () => {
  return src('src/scss/fonts/**')
    .pipe(dest('build/css/fonts'))
    .pipe(browsersync.stream());
};

const watcher = () => {
  watch('src/js/*.js', scripts);
  watch('src/scss/**/*.scss', styles);
  watch('src/html/**/*.html', generateHtml);
  watch('src/images/**', sendImages);
  watch('src/fonts/**', sendFonts);
  watch('src/vendor/**', vendor);
};

const hasher = () => {
  return src("build/index.html")
    .pipe(hashsrc({build_dir:"build",src_path:"js",exts:[".js"]}))
    .pipe(hashsrc({build_dir:"build",src_path:"css",exts:[".css"]}))
    .pipe(dest("build"));
};

exports.js = scripts;
exports.css = styles;
exports.html = generateHtml;
exports.images = sendImages;
exports.watch = parallel(watcher, browserSync);
exports.build = series(parallel(scripts, styles, generateHtml, sendImages, sendFonts, vendor), hasher);
