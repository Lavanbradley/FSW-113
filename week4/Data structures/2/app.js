const data = require('./data.json');

var rowdata = Object.keys(data);
// console.log(rowdata);
for(let row in rowdata){
  // console.log(data[row])
  // var keys = Object.keys(data[row]);
  // console.log(keys)
  // var value = Object.values(data[row]);
  // console.log(value);

  for(let [key, value] of Object.entries(data[row])){
    console.log(`key = ${key} value = ${value}`)
  }
}