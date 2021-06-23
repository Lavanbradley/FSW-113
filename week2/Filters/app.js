let cars = [
  {
    "color": "purple",
    "type": "minivan",
    "registration": new Date('2017-01-03'),
    "capacity": 7
  },
  {
    "color": "red",
    "type": "station wagon",
    "registration": new Date('2018-03-03'),
    "capacity": 5
  }
]
let car1 = {
  "color": "blue",
  "type": "toyota",
  "registration": new Date('2017-03-03'),
  "capacity": 5
}
let car2 = {
  "color": "orange",
  "type": "nissan",
  "registration": new Date('2016-03-03'),
  "capacity": 8
}
let car3 = {
  "color": "black",
  "type": "BMW",
  "registration": new Date('2015-03-03'),
  "capacity": 2
}
let car4 = {
  "color": "gold",
  "type": "Bentley",
  "registration": new Date('2014-03-03'),
  "capacity": 5
}
let car5 = {
  "color": "green",
  "type": "impala",
  "registration": new Date('2013-03-03'),
  "capacity": 5
}
let car6 = {
  "color": "red",
  "type": "chevy",
  "registration": new Date('2012-03-03'),
  "capacity": 7
}
let car7 = {
  "color": "red",
  "type": "olds mobile",
  "registration": new Date('1989-03-03'),
  "capacity": 8
}
let car8 = {

  "color": "pink",
  "type": "station wagon",
  "registration": new Date('2011-03-03'),
  "capacity": 9
}

let car9 = {
  "color": "green",
  "type": "station wagon",
  "registration": new Date('2002-03-03'),
  "capacity": 8
}

let car10 = {
  "color": "yellow",
  "type": "taxi cab",
  "registration": new Date('2021-03-03'),
  "capacity": 5
}


cars.push(car1, car2, car3, car4, car5, car6, car7, car8, car9, car10);
console.log(cars);

let car = cars.filter(car => car.color === "red");
console.log(car);

let redAndGreen = cars.filter(car => car.color === "red" || car.color === "green");
console.log(redAndGreen);

let find = cars.find(cars.color === "yellow");
console.log(find)