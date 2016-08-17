var fs = require("fs");



var fileReadHandler = function (err, data) {
   if (err) {
       return console.error(err);
   }
   console.log(" >> Asynchronous read: " + data.toString());
}


// Asynchronous read
fs.readFile('input.txt', fileReadHandler);

// Synchronous read
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");
