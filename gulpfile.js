const { series, src, dest,parallel } = require("gulp");
const path = require("path");
const clean = require("gulp-clean");

function cleanCache() {
    return src("lib", { read: false,allowEmpty:true }).pipe(clean());
}

function compileSass() {
    const postcss = require("gulp-postcss");
    const syntax = require("postcss-less");
    const sass = require('gulp-sass');

    return src("src/**/*.sass")
        .pipe(
            sass()
        )
        .pipe(postcss([require("autoprefixer")], { syntax: syntax }))
        .pipe(dest("lib/"));
}

function repaceSass2Css(){
    const replace = require('gulp-replace');

    return src(['src/**/*.js','src/**/*.jsx','!src/**/*.test.js'])
        .pipe(replace('.sass', '.css'))
        .pipe(dest('lib'))
}

function complie() {
    const babel = require('gulp-babel');

        return src(['src/**/*.js','src/**/*.jsx','!src/**/*.test.js'])
            .pipe(babel({
                presets: ['@babel/env','@babel/react']
            }))
            .pipe(dest('lib/'))
}


exports.default = series(cleanCache,parallel(compileSass,series(complie,repaceSass2Css)));
