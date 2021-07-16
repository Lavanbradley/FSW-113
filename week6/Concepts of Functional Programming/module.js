var printData = function(data){
  return function () {
  var sentence = data.toLowerCase().split(" ");
  for(var i =0; i < sentence.length; i++){
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1)
}
return sentence.join(" ");
}
}

const print = printData
const output = print("hi there, HOW aRe yOU")
const result = output()
console.log(result)


const myArrays = [4,5,6,7,8]

const newArray =  myArrays.map(item => item * 2)
console.log(myArrays)
console.log(newArray)


const hisArray = [4,5,6,7,8]

const brandNewArray = Object.assign({}, hisArray, {count: hisArray.length})
console.log(hisArray)
console.log(brandNewArray)


const herArray = [4,5,6,7,8]
const herNewArray = {...herArray, count: herArray.length}
console.log(herArray)
console.log(herNewArray)