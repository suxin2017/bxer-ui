const {series=()=>{}, src=()=>{}, dest=()=>{}} = require("gulp");
const clean = require("gulp-clean");

function cleanCache() {
    return src("lib", {read: false, allowEmpty: true}).pipe(clean());
}

function compileSass() {
    const postcss = require("gulp-postcss");
    const syntax = require("postcss-less");
    const sass = require('gulp-sass');

    return src("src/components/**/*.sass")
        .pipe(
            sass()
        )
        .pipe(postcss([require("autoprefixer")], {syntax: syntax}))
        .pipe(dest("lib/"));
}


function complie() {
    const babel = require('gulp-babel');
    const replace = require('gulp-replace');

    return src(['src/components/**/*.js', 'src/components/**/*.jsx', '!src/components/**/*.test.js'])
        .pipe(babel({
            presets: ['@babel/env', '@babel/react']

        }))
        .pipe(replace('.sass', '.css'))
        .pipe(dest('lib/'))
}


exports.default = series(cleanCache,
    series(compileSass, complie));
