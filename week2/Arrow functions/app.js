//CLO1

var temp = () => 104
console.log(typeof temp);
//It showed that it was a function

console.log(temp());
//It showed the number 104

//CLO2
var temp = multiplier => 104 * multiplier
console.log(temp(2))
//It showed the number 208, 104 * 2


//CLO3
var temp = (multiplier, divider) => 104 * multiplier/divider;
console.log(temp(3,6));
//It showed the number 52, 104* 3 / 6


//CLO4
var temp = (multiplier, divider)=> { //Block
  let result = 104 * multiplier;
  if(result){
    result = 104 / divider;
  }
  return result;
};

console.log(temp(3,6));
//It showed the number 17.333333333333332, I do not understand this one


//CLO5

// var clickButton = function('click', function() {
//   console.log(this);
// };

//This one gave me an error, I double checked my work, but there is still an error. Did I miss something?
//I even tried adding the ending parentheses and still got an error


//CLO6
var clickButton = function(){
  console.log(this);
}
clickButton();
//This showed me what I believe to be a window object.


//CLO7
var clickButton = () => {
  console.log(this);
}
//I saw nothing in the terminal or my web browser terminal related to this


//CLO8
var person = {
  name: 'David Smith',
  age: 56,
  details: function(){
    console.log(this);
  }
}

person.details();
//This showed persons name and age


//CLO9
var person = {
  name: 'David Smith',
  age: 56,
  details: ()=> {
    console.log(this);
  }
}

person.details();
//This showed the window object and persons name and age



//CLO10
var temp = () =>100
console.log(temp);
//This showed () => 100