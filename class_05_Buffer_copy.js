var buffer1 = new Buffer('ABCDEFGHIJKLM');
//copy a buffer
var buffer2 = new Buffer(10);
buffer1.copy(buffer2, 1, 2, 5);
console.log("buffer2 content: " + buffer2.toString());
