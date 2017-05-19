var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function(){

console.log("Hi Anil Rao");
});

gulp.task('html', function(){

console.log("Hi Anil Rao HTML");
});

gulp.task('styles', function(){

console.log("styles are updated");
});

gulp.task('watch', function(){

	watch('./app/index.html', function(){

		gulp.start('html');

	});
	watch('./app/assets/styles/**/*.css', function(){

		gulp.start('styles');
	});
})