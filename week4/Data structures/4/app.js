const data = require('./data.json');

var rowdata = Object.keys(data);
// console.log(rowdata);
for (let row in rowdata) {
  var map = new Map(Object.entries(data[row]))
  map.forEach((value, key) => {
    console.log(`key = ${key} value = ${value}`)
  })
}





