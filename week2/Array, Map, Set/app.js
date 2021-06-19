//CLO1
var studentArray = Array(10);
console.log(studentArray.length);
console.log(studentArray);
//The value is 10 and an empty array with a length of 10


//CLO2
var studentArray = Array.of(10);
console.log(studentArray.length);
console.log(studentArray);
//The value is 1 and 10

//CLO3
var grades = [90, 98, 78, 99];
var studentGrades = Array.from(grades, g => g * 110);
console.log(studentGrades.length);
console.log(studentGrades);
//The value is 4 and [9900, 10780,8580,10890]

//CLO4
var grades = [90, 98, 78, 99];
var studentGrades = Array.from(grades, function (g) {
  return g * this.percentageIncrement
}, { percentageIncrement: 110 });
console.log(studentGrades);
//The value is [9900, 10780,8580,10890]


//CLO5
var grades = [90, 98, 78, 99];
var studentGrades = Array.from(grades, g => {
  return g * this.percentageIncrement
}, { percentageIncrement: 1.10 })
console.log(studentGrades);
//The value is  [nan,nan,nan,nan]

//CLO6
var grades = [90, 98, 78, 99];
var studentGrades = grades.find(v => v == 90);
console.log(studentGrades);
//The value is 90


//CLO7
var grades = [90,98,78,99];
var studentGrades = grades.find(v => v >= 90);
console.log(studentGrades);
//The value is 90


//CLO8
var grades = [90,98,78,99];
var studentGrades = grades.map(v => v* .090);
console.log(studentGrades)
//The value is [8.1,8.82,7.02,8.91]


//CLO9
var grades = [90,98,78,99];
var studentGrades = grades;
console.log(studentGrades);
//The value is [90,98,78,99]



//CLO10
var student = {name: 'John Mason'}
var adjunct = {name: 'Dave Larson'};
var people = new Map();
people.set(student, "Student");
people.set(adjunct, "Adjunct");
console.log(people);
//The value is the student and adjunct object

//CLO11

var student = {name: 'John Mason'};
var adjunct = {name: 'Dave Larson'};
var people = new Map();
people.set(student, "Student")
people.set(adjunct, "Adjunct");
people.delete(student);
console.log(people);
//The value is the student and adjunct object

//CLO12
var student = {name: 'John Mason'};
var adjunct = {name: 'Dave Larson'};
var people = new Map();
people.set(student, 'Student')
people.set(adjunct, 'Adjunct');
people.clear();
console.log(people);
//The value is an empty object

//CLO13
var student = {name: 'John Mason'};
var adjunct = {name: 'Dave Larson'};
var people = new Map();
people.set(student, "Student");
people.set(adjunct, "Adjunct");
var result = people.has(student);
console.log(result);
//The value is true

//CLO14

var student = {name: 'John Mason'};
var adjunct = {name: 'Dave Larson'};
var people = new Map();
people.set(student, 'Student')
people.set(adjunct, 'Adjunct');
var result = people.keys(student);
console.log(result);
//The value is MapIterator {{…}, {…}}
// [[Entries]]
// 0: Object
// 1: Object
// __proto__: Map Iterator
// [[IteratorHasMore]]: true
// [[IteratorIndex]]: 0
// [[IteratorKind]]: "keys"

//CLO15

var student = {name: 'John Mason'};
var adjunct = {name: 'Dave Larson'};
var people = new Map();
people.set(student, 'Student')
people.set(adjunct, 'Adjunct');
var result = people.values(student);
console.log(result);
//The value is the student and adjunct object

//CLO16

var student = {name: 'John Mason'};
var adjunct = {name: 'Dave Larson'};
var people = new WeakMap();
people.set(student, 'Student')
people.set(adjunct, 'Adjunct');
adjunct = null;
console.log(people.size)
console.log(people.size)
//The value is undefined both times


//CLO17

var student = {name: 'John Mason'};
var adjunct = {name: 'Dave Larson'};
var people = new Set();
people.add(student);
people.add(adjunct);
people.add(adjunct);
console.log(people.size)
//The value is 2


//CLO18
var students = [{name: 'John Mason'}, {name: 'Don Vasco'}, {name:'Mary Landley'}];
var people = new Set(students);
console.log(people.has({name: 'Dave Vasco'}));
//The value is false