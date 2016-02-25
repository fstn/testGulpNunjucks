var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');

gulp.task('default', function () {
      
  return gulp.src('src/templates/*.html')
    .pipe(nunjucksRender({
         tags: {
        blockStart: '<%',
        blockEnd: '%>',
        variableStart: '<$',
        variableEnd: '$>',
        commentStart: '<#',
        commentEnd: '#>'
    },
      path: ['src/templates/'] // String or Array
    }))
    .pipe(gulp.dest('dist'));
});
