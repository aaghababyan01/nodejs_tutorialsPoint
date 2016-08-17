var fs = require("fs");



fs.readFile('input.txt', displayFileContent);

console.log("Program Ended");

function displayFileContent(err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
}
