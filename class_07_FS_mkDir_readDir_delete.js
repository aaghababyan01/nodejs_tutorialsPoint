var fs = require("fs");



console.log("Going to create directory tmp");
fs.mkdir('/tmp', function(err){
   if (err) {
       return console.error(err);
   }
   console.log("Directory (temp) created successfully!");
});

console.log("Going to create directory tmp/test1");
fs.mkdir('tmp/test1', function(err){
   if (err) {
       return console.error(err);
   }
   console.log("Directory (test1) created successfully!");
});


console.log("Going to create directory tmp/test2");
fs.mkdir('tmp/test2', function(err){
   if (err) {
       return console.error(err);
   }
   console.log("Directory (test1) created successfully!");
});


console.log("Going to read directory /tmp");
fs.readdir("tmp/",function(err, files){
   if (err) {
       return console.error(err);
   }
   files.forEach( function (file){
       console.log( file );
   });
});


console.log("Going to delete directory /tmp/test1");
fs.rmdir("tmp/test1",function(err){
   if (err) {
       return console.error(err);
   }
   console.log("Going to read directory tmp");
   fs.readdir("tmp/",function(err, files){
      if (err) {
          return console.error(err);
      }
      files.forEach( function (file){
          console.log( file );
      });
   });
});
