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

// Deploy
var connect     = require('gulp-connect');

// Other
var shell       = require('gulp-shell');
var notify      = require('gulp-notify');

var ngdocs      = require('gulp-ngdocs');
var replace     = require('gulp-replace');


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
            logo    : 'app/assets/images/logos/logo.svg',
            logotype: 'app/assets/images/logos/logotype.svg',
            icon    : 'app/assets/images/icons/icon.svg',
            bg      : 'app/assets/images/backgrounds/**/*.{svg,eps,png,jpg}',
            uploads : 'app/assets/images/uploads/**/*.{svg,eps,png,jpg}'
        }
    },

    core            : {
        base        : 'app/core',
        every       : 'app/core/**/*',

        scripts     : 'app/core/**/*.js',
        views       : 'app/core/**/*.{view,message}.html',
        index       : 'app/index.html',

        main        : 'app/core/app.module.js',
        constants   : 'app/core/**/*.const.js',
        values      : 'app/core/**/*.value.js',
        config      : 'app/core/**/*.config.js',
        run         : 'app/core/**/*.run.js',
        providers   : 'app/core/**/*.provider.js',
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
            logos   : 'app/dist/images/logos',
            bg      : 'app/dist/images/backgrounds',
            uploads : 'app/uploads'
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
    gulp.start('build')
});

gulp.task('build', function() {
    gulp.start('build-views');
    gulp.start('build-scripts');
    gulp.start('build-styles');
    gulp.start('build-images');
});

gulp.task('clean', function() {
    del([paths.dist.base, paths.docs.base, paths.tmp.sass]);
});

gulp.task('live', ['connect'], function() {

    gulp.watch([paths.core.views, paths.core.index], ['build-views']);

    gulp.watch([paths.core.scripts], ['build-scripts']);

    gulp.watch([paths.assets.styles.every], ['build-styles']);
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
gulp.task('build-views', function() {
    gulp.src([paths.core.views])
    .pipe(plumber())
    .pipe(gulp.dest(paths.dist.views.base));
});


/*******************************************************************************
* SCRIPTS
*******************************************************************************/

gulp.task('build-scripts', function() {
    gulp.src([
        paths.core.main,
        paths.core.constants,
        paths.core.values,
        paths.core.config,
        paths.core.providers,
        paths.core.services,
        paths.core.directives,
        paths.core.filters,
        paths.core.controllers,
        paths.core.run
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

gulp.task('build-styles', function() {
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

gulp.task('build-images', function() {
    gulp.start('all-images');
    gulp.start('logo');
    gulp.start('logotype');
    gulp.start('icons');
    gulp.start('backgrounds');
    gulp.start('uploads');
});

gulp.task('all-images', function() {
    gulp.src(paths.assets.images.every)
    .pipe(gulp.dest(paths.dist.images.base));
});

gulp.task('logo', function() {
    var logo = {
        name: 'logo', width: 500, height: 500
    };

    gulp.src(paths.assets.images.logo)
    .pipe(gulp.dest(paths.dist.images.logos))
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
    .pipe(gulp.dest(paths.dist.images.logos));
});

gulp.task('logotype', function() {
    var logotype = {
        name: 'logotype', width: 400, height: 50
    };

    gulp.src(paths.assets.images.logotype)
    .pipe(gulp.dest(paths.dist.images.logos))
    .pipe(plumber())
    .pipe(svg2png())
    .pipe(imageResize({
        width: logotype.width,
        height: logotype.height,
        crop: false,
        upscale: false,
        imageMagick: true
    }))
    .pipe(rename({
        basename: logotype.name
    }))
    .pipe(gulp.dest(paths.dist.images.logos));
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
        .pipe(imageResize({
            width: icon.width,
            height: icon.height,
            crop: false,
            upscale: false,
            imageMagick: true
        }))
        .pipe(rename({
            basename: icon.name
        }))
        .pipe(gulp.dest(paths.dist.images.icons));
    });
});

gulp.task('backgrounds', function() {
    gulp.src(paths.assets.images.bg)
    .pipe(gulp.dest(paths.dist.images.bg));
});

gulp.task('uploads', function() {
    gulp.src(paths.assets.images.uploads)
    .pipe(gulp.dest(paths.dist.images.uploads));
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
