const config = require('./gulp.config')();
const gulp = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");
const runSequence = require("run-sequence");
const cachebust = require("gulp-cache-bust");
const webpackConfig = require("./webpack.config.js");
const webpack = require('webpack');
const webpackstream = require('webpack-stream');
const print = require('gulp-print');
const gulpWebpack = require('gulp-webpack');
const replace = require("gulp-replace");
const changed = require("gulp-changed");

gulp.task("build",
    (done) => {
        runSequence(
            "webpack",
            "cache-buster",
            done);
    });

gulp.task("default", ["build"]);


 


/******************************************************************
 *  WEBPACK
 ******************************************************************/

gulp.task("webpack",
    () => {
        log(config);
        log("WEBPACK...");
        
        return gulp
            .src(config.webPackEntry)
            //.pipe(changed(config.jsBuild, { extension: '.js' }))
            .pipe(print())
            .pipe(webpackstream(webpackConfig, webpack, {}))
            .pipe(print())
            .pipe(gulp.dest(config.webPackDest));

    });


gulp.task("cache-buster", () => {

    log('CACHE BUSTER...');

    // Look for prs.min.js, prs.min.css and append a unique version
    return gulp
        .src(["./index.html"])
        .pipe(print())
        .pipe(cachebust({ type: 'timestamp' }))
        .pipe(print())
        .pipe(gulp.dest("./"));
});


function log(message) {
    console.log(message);
}