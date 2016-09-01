console.log( __filename );

console.log( "xxxxx" );
function printHello(){
    console.log( "Hello, World!");
}
function stopInterval(){
    console.log( "Now Stopping , Interval!");
    clearTimeout(t);
}


// Now call above function after 2 seconds

var t = setInterval(printHello, 2000);
setTimeout(stopInterval, 8000);

console.log( "yyyy" );
console.log( __dirname );


// Now clear the timer

