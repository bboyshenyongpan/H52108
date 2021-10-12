const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))


exports.compileSass=function(done){
    gulp.src('./src/sass/*.scss')

    .pipe(sass({
        //输出选项
        outputStyle:'expanded' // expanded展开sass（默认）   compressed收缩
    }).on('error',sass.logError))

     .pipe(gulp.dest('./dist/css'))

     done();
}

