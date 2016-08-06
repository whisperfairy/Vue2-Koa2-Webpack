/**
 * Created by whisp_000 on 2016/5/30.
 */
const gulp = require('gulp');
const sourcemap = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const glob = require('glob');
var helper = require('./gulp-helper');

console.log(__dirname);
gulp.task('default', ['es6'], function() {
    "use strict";
    glob("src/**/*.es", {}, function(er, files) {
        files.map((item) => {
            console.log(item);
            var result = helper.filepath(item);
            console.log(result);
            return gulp.src(item.toString())
                .pipe(babel({
                    presets: ['es2015', 'stage-3'],
                    plugins: ['transform-runtime']
                }))
                .pipe(gulp.dest('./build/' + result.folderPath));
        })
    });
});
gulp.task('es6', [], function() {
    glob("src/**/*.es", {}, function(er, files) {
        files.map((item) => {
            var watcher = gulp.watch(item.toString(),
                function(event) {
                    var result = helper.filepath(event.path);
                    return gulp.src(event.path.toString())
                        // .pipe(sourcemaps.init({
                        //     loadMaps: true,
                        //     debug: true
                        // }))
                        .pipe(babel({
                            presets: ['es2015', 'stage-3'],
                            plugins: ['transform-runtime']
                        }))
                        // .pipe(sourcemap.write(__dirname + './maps'))
                        .pipe(gulp.dest('./build/' + result.folderPath));
                });

        });

    });
});