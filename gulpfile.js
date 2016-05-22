/*******************************************************************************
* PACKAGES
*******************************************************************************/

// Gulp
var gulp        = require('gulp');
var gutil       = require('gulp-util');
var plumber     = require('gulp-plumber');
var watch       = require('gulp-watch');
var batch       = require('gulp-batch');
var tap         = require('gulp-tap');

// File Management
var concat      = require('gulp-concat');
var copy        = require('gulp-copy');
var rename      = require('gulp-rename');
var del         = require('del');

// Styles
var compass     = require('gulp-compass');
var sassLint    = require('gulp-sass-lint');
var cssLint     = require('gulp-csslint');
var uncss       = require('gulp-uncss');
var cleanCss    = require('gulp-clean-css');

// Scripts
var coffee      = require('gulp-coffee');
var uglify      = require('gulp-uglify');
var jshint      = require('gulp-jshint');

// Images
var svg2png     = require('gulp-svg2png');
var imageResize = require('gulp-image-resize');

// Views
var pug         = require('gulp-pug');
var pugLint     = require('gulp-pug-lint');

// Other
var shell       = require('gulp-shell');
var notify      = require('gulp-notify');
var parallel    = require('concurrent-transform');
var os          = require('os');


/*******************************************************************************
* PATHS
*******************************************************************************/

var paths = {
    base: '.',

    assets: {
        base        : 'assets',
        every       : 'assets/**/*',

        styles      : {
            base    : 'assets/styles',
            every   : 'assets/styles/**/*.s+(a|c)ss',
            main    : 'assets/styles/main.scss'
        },

        scripts     : {
            base    : 'assets/scripts',
            every   : 'assets/scripts/**/*.js',
            main    : 'assets/scripts/main.js'
        },

        images      : {
            base    : 'assets/images',
            every   : 'assets/images/**/*.{svg,eps,png,jpg,ico}',
            logo    : 'assets/images/logo.svg',
            icon    : 'assets/images/icons/icon.svg'
        },

        views       : {
            base    : 'assets/views',
            every   : 'assets/views/**/*.pug',
            roots   : 'assets/views/*.pug'
        }
    },

    dist: {
        base        : 'dist',
        every       : 'dist/**/*',

        styles      : {
            base    : 'dist/styles',
            every   : 'dist/styles/**/*.scss',
            main    : 'dist/styles/main.scss'
        },

        scripts     : {
            base    : 'dist/scripts',
            every   : 'dist/scripts/**/*.js',
            main    : 'dist/scripts/main.js'
        },

        images      : {
            base    : 'dist/images',
            every   : 'dist/images/**/*.{svg,eps,png,jpg,ico}',
            icons   : 'dist/images/icons',
            logo    : 'dist/images/logo.svg'
        },

        views       : {
            base    : 'dist/views',
            every   : 'dist/views/**/*.{html,php}'
        }
    },

    cache: {
        sass        : '.sass-cache'
    }
}


/*******************************************************************************
* GENERAL
*******************************************************************************/

gulp.task('default', function() {
    gulp.start('all')
});

gulp.task('all', function() {
    gulp.start('styles');
    gulp.start('scripts');
    gulp.start('images');
    gulp.start('views');
});

gulp.task('clean', function() {
    del([paths.dist.base, paths.cache.sass]);
});

gulp.task('watch', function() {
    watch([paths.assets.styles.every], ['styles']);

    watch([paths.assets.scripts.every], ['scripts']);

    watch([paths.assets.images.every], ['images']);

    watch([paths.assets.views.every], ['views']);
});


/*******************************************************************************
* STYLES
*******************************************************************************/

gulp.task('styles', function() {
    gulp.src(paths.assets.styles.every)
    .pipe(plumber())
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
    .pipe(compass({
        sass: paths.assets.styles.base,
        css: paths.dist.styles.base,
        style: 'nested',
        comments: false
    }))
    .pipe(gulp.dest(paths.dist.styles.base))
    .pipe(cssLint())
    .pipe(cssLint.reporter())
    .pipe(uncss({
        html: [paths.dist.views.every]
    }))
    .pipe(cleanCss())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest(paths.dist.styles.base));
});


/*******************************************************************************
* SCRIPTS
*******************************************************************************/

gulp.task('scripts', function() {
    gulp.src(paths.assets.scripts.every)
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest(paths.dist.scripts.base))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist.scripts.base))
});


/*******************************************************************************
* IMAGES
*******************************************************************************/

gulp.task('images', function() {
    gulp.start('logo');
    gulp.start('icons');
});

gulp.task('logo', function() {
    var logo = {
        name: 'logo', width: 500, height: 500
    };

    gulp.src(paths.assets.images.logo, {base: paths.assets.images.base})
    .pipe(gulp.dest(paths.dist.images.base))
    .pipe(plumber())
    .pipe(svg2png())
    .pipe(imageResize({
        width: logo.width,
        height: logo.height,
        crop: false,
        upscale: false,
        imageMagick: true
    }))
    .pipe(rename({
        basename: logo.name
    }))
    .pipe(gulp.dest(paths.dist.images.base));
});

gulp.task('icons', function() {
    var icons = [
        {name: 'favicon-48', width: 48, height: 48},
        {name: 'favicon-32', width: 32, height: 32},
        {name: 'favicon-16', width: 16, height: 16},

        {name: 'apple-touch-icon-ipad-retina', width: 144, height: 144},
        {name: 'apple-touch-icon-iphone-retina', width: 114, height: 114},
        {name: 'apple-touch-icon-ipad', width: 72, height: 72},
        {name: 'apple-touch-icon-iphone', width: 57, height: 57},
        {name: 'apple-touch-startup-image-ipad-landscape', width: 748, height: 748},
        {name: 'apple-touch-startup-image-ipad-portrait', width: 768, height: 768},
        {name: 'apple-touch-startup-image-iphone', width: 320, height: 320},
        {name: 'microsoft-tile-image', width: 144, height: 144},
        {name: 'android-icon-192', width: 192, height: 192},
        {name: 'android-icon-144', width: 144, height: 144},
        {name: 'android-icon-96', width: 96, height: 96},
        {name: 'android-icon-72', width: 72, height: 72},
        {name: 'android-icon-48', width: 48, height: 48},
        {name: 'android-icon-36', width: 36, height: 36}
    ];

    icons.forEach(function(icon) {
        gulp.src(paths.assets.images.icon)
        .pipe(plumber())
        .pipe(svg2png())
        .pipe(parallel(imageResize({
            width: icon.width,
            height: icon.height,
            crop: false,
            upscale: false,
            imageMagick: true
        })), os.cpus().length)
        .pipe(rename({
            basename: icon.name
        }))
        .pipe(gulp.dest(paths.dist.images.icons));
    });
});


/*******************************************************************************
* VIEWS
*******************************************************************************/
gulp.task('views', function() {
    gulp.src(paths.assets.views.roots)
    .pipe(plumber())
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest(paths.dist.views.base));
});


/*******************************************************************************
* MESSAGES
*******************************************************************************/
function message(scope, command, argument) {
    gutil.log(
        gutil.colors.cyan(scope), ':',
        gutil.colors.blue(command), ':',
        gutil.colors.yellow(argument)
    );
}
