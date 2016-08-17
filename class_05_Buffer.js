// buf = new Buffer(26);
// for (var i = 0 ; i < 26 ; i++) {
//   buf[i] = i + 97;
// }

buf = new Buffer("ageb adaffa nmlldkjsj");

console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // outputs: abcde
console.log( buf.toString('utf8',0,20));    // outputs: abcde
console.log( buf.toString('hex'));    // outputs: abcde
console.log( buf.toString('base64'));    // outputs: abcde
console.log( buf.toString(undefined,0,20)); // encoding defaults to 'utf8', outputs abcde
console.log( buf.toJSON()); // encoding defaults to 'utf8', outputs abcde

console.log(">>>>   concatinate function <<<<<<<");

var buffer1 = new Buffer('TutorialsPoint ');
var buffer2 = new Buffer('Simply Easy Learning');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 content: " + buffer3.toString());
