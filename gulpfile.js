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
var minify = require('gulp-minify');
const uglify = require('gulp-uglify');
const deletefile = require('gulp-delete-file');
var browserifycss = require ('browserify-css');


function erreur() {
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);
  this.emit('end');
}

gulp.task('clean', function()		{ deletefile("src/*.js").pipe(deletefile("build/*.*"))});

gulp.task('icones', function()		{ gulp.src('src/*.ico').pipe(gulp.dest('build')) });

gulp.task('pages', function()		{ gulp.src('src/index.html').pipe(gulp.dest('build')).pipe(gulp.dest('public')) });

gulp.task('transform', function()	{
	return	gulp.src('./src/*.jsx')
			.pipe(babel({
							presets: [
										"react",
										"es2015"
									 ]
						}))
//			.pipe(minify({
//				minify: true,
//				collapseWhitespace: true,
//				conservativeCollapse: true,
//				minifyJS: true,
//				minifyCSS: true
//			}))
			.pipe(gulp.dest('./src'));
});

gulp.task('bundle', function()		{
    return	browserify({entries: 'src/index.js', debug: true})
    		.transform("babelify", {
			  						global: true,
			  						ignore: /\/node_modules\/(?!app\/)/
								  }
					 )
    		.transform('browserify-css', {
											minify: true
//											output: 'index.css'
									 	 }
					)
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


gulp.task('default', ['icones', 'pages', 'transform', 'bundle', 'browser-sync'], function() {
	gulp.watch('./src/*.jsx', ['transform', 'bundle']);
	gulp.watch('./src/bundle.css', ['transform', 'bundle']);
	gulp.watch('./src/*.ico', ['images']);
});