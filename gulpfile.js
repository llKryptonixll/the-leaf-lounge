import gulp from 'gulp';
import gulpWebp from 'gulp-webp';
import imagemin from 'gulp-imagemin';

async function compressImages() {
    gulp.src(['public/images/**/*'])
    .pipe(imagemin())
    .pipe(gulpWebp())
    .pipe(gulp.dest('public/compressedImages'))
}

export default gulp.series(compressImages);
//test