const gulp = require("gulp");
const imagemin = require("gulp-imagemin");

gulp.task("message", function() {
  return console.log("gulp hello world");
});

gulp.task("default", function() {
  return console.log("gulp hello world");
});

//copy all html files

gulp.task("copyHtml", function() {
  gulp.src("src/*.html").pipe(gulp.dest("destination"));
});

//optimaze images files plugin

exports.default = () =>
  gulp
    .src("src/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/images"));
