var gulp = require('gulp');
var del = require('del');
var usemin = require('gulp-usemin');
var imagemin = require('gulp-imagemin');
var rev = require('gulp-rev');
var nano = require('gulp-cssnano');
var uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create();


gulp.task('previewdist', function() {
   browserSync.init({
    notify: false,
    server: {
      baseDir: "docs"
    }});
});

gulp.task('delDocs',['icons'], function() {
  return del(['./docs/']); 
});


gulp.task('copygenfiles', ['delDocs'], function(){
	pathstoCopy =[
'./app/**/*',
'!./app/index.html',
'!./app/assets/images/**',
'!./app/assets/styles/**',
'!./app/assets/scripts/**',
'!./app/temp',
'!./app/temp/**',
	];

	return gulp.src(pathstoCopy)
	.pipe(gulp.dest('./docs/'))
})

gulp.task('optimize-images', ['delDocs'], function(){
	return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
	.pipe(imagemin({
		progresive: true,
		interlaced: true, 
		multipass:true
	}))
	.pipe(gulp.dest('./docs/assets/images'))
});

gulp.task('usemin', [ 'styles', 'scripts'],function(){
	return gulp.src('./app/index.html')
	.pipe(usemin({
		css:[rev,nano],
		js:[rev,uglify]
	}))
	.pipe(gulp.dest('./docs/'))
})


gulp.task('usemintrigger', ['delDocs'], function(){
	gulp.start('usemin');
})

gulp.task('build', ['delDocs','copygenfiles','optimize-images', 'usemintrigger']);


