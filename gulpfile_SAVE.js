var source = require('vinyl-source-stream');
var gulp = require('gulp');
const babel = require('gulp-babel');
var gutil = require('gulp-util');
var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');
var notify = require('gulp-notify');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var buffer = require('vinyl-buffer');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var historyApiFallback = require('connect-history-api-fallback');
const minify = require('gulp-minify');
const uglify = require('gulp-uglify');
const deletefile = require('gulp-delete-file');


function erreur() {
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);
  this.emit('end');
}

gulp.task('clean', function()		{ deletefile("src/*.js") });

gulp.task('styles', function()		{ gulp.src('src/css/*.css').pipe(gulp.dest('build/css')) });

gulp.task('images', function()		{ gulp.src('src/img/*.*').pipe(gulp.dest('build/img')) });

gulp.task('transform', function()	{
	return	gulp.src('./src/*.jsx')
			.pipe(babel({
							presets: [
										"react",
										"es2015"
									 ]
						}))
			.pipe(gulp.dest('./src'));
});

gulp.task('bundle', function()		{
    return	browserify('./src/index.jsx')
    		.transform(babelify)
        	.bundle()
        	.on('error', erreur)
        	.pipe(source('index.js'))
        	.pipe(buffer())
        	.pipe(gulp.dest('build'))

});

gulp.task('browser-sync', function() {
    browserSync({
        server : {},
        middleware : [ historyApiFallback() ],
        ghostMode: false
    });
});


gulp.task('default', ['clean', 'styles', 'images', 'transform', 'bundle', 'browser-sync'], function() {
	gulp.watch('./src/*.jsx', ['transform', 'bundle']);
	gulp.watch('./src/css/*.css', ['styles']);
	gulp.watch('./src/img/*.*', ['images']);
});