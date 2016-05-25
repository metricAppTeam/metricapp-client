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
var connect     = require('gulp-connect');
var ngdocs      = require('gulp-ngdocs');


/*******************************************************************************
* PATHS
*******************************************************************************/

var paths = {

    app             : {
        base        : 'app',
        index       : 'app/index.html'
    },

    docs         : {
        base    : 'docs',
        every   : 'docs/**/*.html'
    },

    assets          : {
        base        : 'app/assets',
        every       : 'app/assets/**/*',

        styles      : {
            base    : 'app/assets/styles',
            every   : 'app/assets/styles/**/*.s+(a|c)ss',
            main    : 'app/assets/styles/app.scss'
        },

        images      : {
            base    : 'app/assets/images',
            every   : 'app/assets/images/**/*.{svg,eps,png,jpg,ico}',
            logo    : 'app/assets/images/logo.svg',
            icon    : 'app/assets/images/icons/icon.svg'
        }
    },

    core            : {
        base        : 'app/core',
        every       : 'app/core/**/*',

        scripts     : 'app/core/**/*.js',
        views       : 'app/core/**/*.view.pug',

        index       : 'app/core/index.pug',

        main        : 'app/core/app.module.js',
        config      : 'app/core/**/*.config.js',
        run         : 'app/core/**/*.run.js',
        services    : 'app/core/**/*.service.js',
        directives  : 'app/core/**/*.directive.js',
        filters     : 'app/core/**/*.filter.js',
        controllers : 'app/core/**/*.controller.js'
    },

    dist            : {
        base        : 'app/dist',
        every       : 'app/dist/**/*',

        views       : {
            base    : 'app/dist/views',
            every   : 'app/dist/views/**/*.html',
            index   : 'app/index.html'
        },

        scripts     : {
            base    : 'app/dist/scripts',
            every   : 'app/dist/scripts/**/*.js',
            main    : 'app/dist/scripts/app.js'
        },

        styles      : {
            base    : 'app/dist/styles',
            every   : 'app/dist/styles/**/*.css',
            main    : 'app/dist/styles/app.css'
        },

        images      : {
            base    : 'app/dist/images',
            every   : 'app/dist/images/**/*.{svg,eps,png,jpg,ico}',
            icons   : 'app/dist/images/icons',
            logo    : 'app/dist/images/logo.svg'
        }
    },

    tmp             : {
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
    gulp.start('views');
    gulp.start('scripts');
    gulp.start('styles');
    gulp.start('images');
});

gulp.task('clean', function() {
    del([paths.app.index, paths.dist.base, paths.docs.base, paths.tmp.sass]);
});

gulp.task('watch', function() {

    watch([paths.core.index, paths.core.views], ['views']);

    watch([paths.core.scripts], ['scripts']);

    watch([paths.assets.styles.every], ['styles']);

    watch([paths.assets.images.every], ['images']);
});

gulp.task('connect', function() {
    connect.server({
        root: 'app',
        port: 8090,
        livereload: true
    });
});

gulp.task('disconnect', function() {
    connect.serverClose();
});


/*******************************************************************************
* VIEWS
*******************************************************************************/
gulp.task('views', function() {
    gulp.src(paths.core.index)
    .pipe(plumber())
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest(paths.app.base));

    gulp.src(paths.core.views)
    .pipe(plumber())
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest(paths.dist.views.base));
});


/*******************************************************************************
* SCRIPTS
*******************************************************************************/

gulp.task('scripts', function() {
    gulp.src([
        paths.core.main,
        paths.core.config,
        paths.core.run,
        paths.core.services,
        paths.core.directives,
        paths.core.filters,
        paths.core.controllers
    ])
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('app.js'))
    .pipe(gulp.dest(paths.dist.scripts.base))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist.scripts.base));
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
    .pipe(rename({
        basename: 'app'
    }))
    .pipe(gulp.dest(paths.dist.styles.base))
    .pipe(cssLint())
    .pipe(cssLint.reporter())
    .pipe(uncss({
        html: [paths.app.index, paths.dist.views.every]
    }))
    .pipe(cleanCss())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest(paths.dist.styles.base));
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
        {name: 'favicon-64', width: 64, height: 64},
        {name: 'favicon-48', width: 48, height: 48},
        {name: 'favicon-32', width: 32, height: 32},
        {name: 'favicon-24', width: 24, height: 24},
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
* MESSAGES
*******************************************************************************/
function message(scope, command, argument) {
    gutil.log(
        gutil.colors.cyan(scope), ':',
        gutil.colors.blue(command), ':',
        gutil.colors.yellow(argument)
    );
}
