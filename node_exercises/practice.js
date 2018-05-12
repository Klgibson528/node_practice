var fs = require("fs");
var marked = require("marked");
var filename = "marked.md";

fs.readFile(filename, function(error, buffer) {
  if (error) {
    console.error(error.message);
    return;
  }
  var file = buffer.toString();
  var html = marked(file);
  console.log(html);

  fs.writeFile("marked_html.html", html, function() {
    if (error) {
      console.error(error.message);
      return;
    }
    console.log("File Save: ", "marked_html.html");
  });
});

// var marked = require("marked");
// var html = marked("# Title");
// console.log(html);
