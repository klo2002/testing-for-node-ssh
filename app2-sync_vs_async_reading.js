
// SYNCHRONOUS READING
var fss=require("fs");
console.log("Application Started Synchronously");
var data=fss.readFileSync("data.txt");
console.log(data.toString());
console.log("PROGRAM ENDED");

// ASYNCHRONOUS READING WITH CALLBACK FUNCTION
var fsa=require("fs");
console.log("\n\n==========================================================");
console.log("==========================================================");
console.log("Application Started Asynchronously");
fsa.readFile("data.txt", function(err, data){
	if(err) return console.error(err);
	
	console.log(data.toString());
});
console.log("PROGRAM ENDED");
