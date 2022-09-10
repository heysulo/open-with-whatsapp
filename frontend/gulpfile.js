let gulp = require('gulp');
let concat = require('gulp-concat');
let sass = require('gulp-sass')(require('sass'));
let watch = require('gulp-watch');
let clean = require('gulp-clean');

function buildCss() {
    return gulp.src('./scss/styles.scss')
        .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('../public/css'));
}

function buildJs() {
    return gulp.src('./app/**/*.js')
        .pipe(concat('application.js'))
        .pipe(gulp.dest('../public/js'));
}

function buildHtml() {
    return gulp.src('./app/**/*.html')
        .pipe(gulp.dest('../public/html'));
}

function cleanJs() {
    return gulp.src('../public/js/*', {read: false})
        .pipe(clean({force: true}));
}

function cleanCss() {
    return gulp.src('../public/css/*', {read: false})
        .pipe(clean({force: true}));
}

function cleanHtml() {
    return gulp.src('../public/html/*', {read: false})
        .pipe(clean({force: true}));
}

gulp.task('build-css', buildCss);
gulp.task('build-js', buildJs);
gulp.task('build-html', buildHtml);

gulp.task('clean-js', cleanJs);
gulp.task('clean-css', cleanCss);
gulp.task('clean-html', cleanHtml);

gulp.task('clean',
    gulp.series(
        gulp.parallel(
            'clean-css',
            'clean-js',
            'clean-html'
        )
    )
);

gulp.task('build',
    gulp.series(
        gulp.parallel(
            'build-css',
            'build-js',
            'build-html'
        ),
    )
);

gulp.task('release', gulp.series('clean', 'build'));

gulp.task('watch', function () {
    watch(['./**'], {}, function () {
        buildCss();
        buildHtml();
        buildJs();
    })
});
