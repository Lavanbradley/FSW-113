//CLO1

// var studentGrades = [90,80,88,98];

// var result = ...studentGrades;

// console.log(result);
// console.log(result is instanceof Array);

//I get no value from this expression, only an error

//CLO2

// let myGrade = 99;
// var result = ...myGrade;
// console.log(result);

//I get no value from this expression, only an error

//CLO3

var studentGrades = [90, 80, 88, 98];
var maxGrade = Math.max(...studentGrades);
console.log(maxGrade);
//Result is 98

//CLO4
var studentGrades = [90, 80, 88, 98];
var gradeArray = [...studentGrades];
console.log(gradeArray)
//Result is [90,80,88,98]

//CLO4

var studentGrades = [...[, ,]];
console.log(studentGrades);
//Result is [undefined, undefined]

//CLO4
var myHouseNumber = [..."8976"];
console.log(Math.max(myHouseNumber))
//Result is NaN

//CLO5
var myHouseNumber = [..."8975", "AB", "CDEF"];
console.log(Math.max(myHouseNumber))
//Result is NaN

//CLO7
var studentName = "James Moore"

var dob = "02/02/2002"

var studentInfo = {
  [studentName]: studentName,
  [dob]: dob
}
console.log(studentInfo)
//Result is {James Moore: "James Moore", 02/02/2002: "02/02/2002"}

//CLO7
var studentName = "James Moore"

var dob = "02/02/2002"

var studentInfo = {
  studentName,
  dob
}
console.log(studentInfo)
//Result is {studentName: "James Moore", dob: "02/02/2002"}

//CLO8

var studentName = "James Moore"
var dob = "02/02/2002"
var studentInfo = {
  studentName,
  dob,
  currentAge() {
    var today = new Date()
    var dobDate = new Date(this.dob)
    var timeDiff = today.getTime() - dobDate.getTime()
    var days = timeDiff / (1000 * 3600 * 24 * 365)
    return Math.round(days)
  }
}
var result = studentInfo.currentAge()
console.log(studentInfo)

//Result is {studentName: "James Moore", dob: "02/02/2002", currentAge: ƒ}
//But if I console log result, I get 19

//CLO9
var studentName = "James Moore"
var dob = "02/02/2002"
var studentInfo = {
  studentName,
  dob,
  age: function () {
    var today = new Date()
    var dobDate = new Date(this.dob)
    var timeDiff = today.getTime() - dobDate.getTime()
    var days = timeDiff / (1000 * 3600 * 24 * 365)
    return Math.round(days)
  }
}

var result = studentInfo.age()
console.log(studentInfo)
//Result is {studentName: "James Moore", dob: "02/02/2002", age: ƒ}


//CLO10

var studentName = "James Moore"
var dob = "02/02/2002"
var studentInfo = {
  studentName,
  dob,
  ["ageOfStudent"]: function () {
    var today = new Date()
    var dobDate = new Date(this.dob)
    var timeDiff = today.getTime() - dobDate.getTime()
    var days = timeDiff / (1000 * 3600 * 24 * 365)
    return Math.round(days)
  }
}
var result = studentInfo["ageOfStudent"]()

console.log(studentInfo)
//Result is {studentName: "James Moore", dob: "02/02/2002", ageOfStudent: ƒ}


//CLO11

var columnName = "Name";
var name = {};
var student = {
  get [columnName]() {
    return name;
  },
  set [columnName](value) {
    name = value;
  },
};

student.Name = "Harry Potter";
console.log(student.Name);
//Result is Harry Potter