const { src, dest }  = require("gulp");
const minify = require("gulp-minify");

const minifyjs = () => {

    return src('src/js/*.js', { allowEmpty: true }) 
        .pipe(minify({noSource: true}))
        .pipe(dest('dist/js'))
};

module.exports = minifyjs;