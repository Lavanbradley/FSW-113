//CLO1
var studentGrades = [90,80,88,98]
var curveGrades = function(grades, percentage){
  var newGrades = grades.map(grade =>{
    return grade * percentage
  })
  return newGrades
}
var result = curveGrades(studentGrades);
console.log(result);
//Result is NAN

//CLO2
var studentGrades = [90,80,88,98]
var curveGrades = function(grades, percentage = 1.10){
  var newGrades = grades.map(grade => {
    return grade * percentage
  })
  return newGrades
}
var result = curveGrades(studentGrades);
console.log(result);
//Result is 99,88,96,107

//CLO3

var studentGrades = [90,80,88,98]
var curveGrades = function(grades, percentage = 1.10){
  var newGrades = grades.map(grade =>{
    return grade* percentage
  })
  return newGrades
}
var result = curveGrades(studentGrades, 1.33);
console.log(result)
//Result is 119.7,106.4,117.04, 130.34

//CLO4
var studentGrades = [90,80,88,98]
var curveGrades = function(percentage = 1.10, ...grades){
  var newGrades = grades.map( grade=> {
       return grade * percentage
   })
   return newGrades
}

var result = curveGrades(...studentGrades, 1.33)
console.log(result);
//Result is 7200,7920,8820,119.7

//CLO5
var studentGrades = [ 90, 80 , 88, 98]
var curveGrades = function( percentage = 1.10, ...grades){
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrades(...studentGrades)
console.log(result)
//Result is 7200, 7920,8820

//CLO6

var studentGrades = [ 90, 80 , 88, 98]
var curveGrades = function(percentage = 1.10, ...grades){
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrades(1.24, ...studentGrades)
console.log(result)

//CLO7

var studentGrades = [ 90, 80 , 88, 98]
var curveGrades = function(percentage = 1.10, ...grades){
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrades(undefined, ...studentGrades)
console.log(result);
//Result is 99, 88,98.8,107.8

//CLO8

var studentGrades = [ 90, 80 , 88, 98]

var percentageCurve = 0.98
var curveGrades = function(percentage = percentageCurve, ...grades){
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrades(undefined, ...studentGrades)
console.log(result)
//Result is 88.2, 78.4,86.24,96.03

//CLO9

var studentGrades = [ 90, 80 , 88, 98]
var avg = function(array){
   var average = array.reduce((a, b) => a + b, 0)
   return average/array.length/100
}
var curveGrades = function(  percentage = avg(studentGrades),...grades){
   var newGrades = grades.map( grade=> {
      return grade * percentage
    })
    return newGrades
}

var result = curveGrades(undefined, ...studentGrades)



console.log(result);
//Result is 80.1,71.2, 78.32,87.22

//CLO10

var studentGrades = [ 90, 80 , 88, 98]
var avg = function(array){
   var average = array.reduce((a, b) => a + b, 0)
   return average/array.length/100
}
var curveGrades = function(  percentage = avg(studentGrades),...grades){
   var newGrades = grades.map( grade=> {
      return grade * percentage
    })
    return newGrades
}

var result = curveGrades(1.3, ...studentGrades)
 console.log(result)
 //Result is 117,104,114.4,127.4

 //CLO11
 var studentGrades = [ 90, 80 , 88, 98]
var avg = function(array){
   var average = array.reduce((a, b) => a + b, 0)
   return average/array.length/100
}
var curveGrades = function(  percentage = avg(studentGrades),...grades){
   var newGrades = grades.map( grade=> {
      return grade * percentage
    })
    return newGrades
}

var result = curveGrades(1.3, 68,56, ...studentGrades)
console.log(result)
//Result is 88.4,72.8,117,104,114.4,127.4

//CLO12
let count = new Function(grades, ...grades.length)

var result = count([ 90, 80 , 88, 98])



console.log(result)

//Gives me an error, I have no idea what I am supposed to do with this.







































