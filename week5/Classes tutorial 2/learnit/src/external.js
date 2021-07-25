//CLO1

// number = 10;
// console.log(name);

//Name is not defined. Did it mean console log number?


//CLO4
"use strict"
// const ext = require("./main.js");
// console.log("from ext", number)

//form ext 10, showing we can type it the same way in external.js and it works the same. Still pulling 10 from the number variable

//CLO5 is the same question as CLO4

//CLO6
// var number =10;
// const ext = require("./main.js");
// console.log("from ext", ext.Number)

//form ext undefined

//CLO7

var number =10;
// const ext = require("./main.js");
// exports.Number  = number;
// console.log("from ext", ext.Number)

 //from ext undefined

 //CLO8
 var name = "John"
exports.Number  = number
exports.Name  = name
const ext = require("./main.js");
console.log("from ext", ext.Number)
console.log("from ext", ext.Name)

//from ext undefined
//from ext undefined





