const gulp = require('gulp');
const bs = require('browser-sync');

gulp.task('start', () => {
	bs.init({
		server: {
			baseDir: "./src"
		}
	})

	gulp.watch(["./src/*.html", "./src/css/*.css"]).on('change', bs.reload);
})