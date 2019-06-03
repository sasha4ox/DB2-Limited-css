let gulp = require("gulp");
let sass = require("gulp-sass");
let browserSync = require('browser-sync').create();


function serve(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("*.sass").on('change', sassF);
    gulp.watch("*.html").on('change', browserSync.reload);
};


function sassI(){
    return gulp.src("*.sass")
    .pipe(sass())
    .pipe(gulp.dest("./"))
    .pipe(browserSync.stream());
};
gulp.task(sassF);
gulp.task(serve);

gulp.task('default', gulp.series(sassF,serve));