var students = [ 


  { name: "John", city: "California" },


  { name: "Peter", city: "London"},


  { name: "Mathew", city: "Manchester" },


  { name: "Jane", city: "Phoenix" }

]

students.forEach(Element => console.log(Element))

students[0].dateOfBirth = "10/10/10" , students[1].dateOfBirth = "10/10/11" , students[2].dateOfBirth = "10/10/12" , students[3].dateOfBirth = "10/10/13";

students[0].state = "California" , students[1].state = "Oregon" , students[2].state = "New York" , students[3].state = "Maine";

students[0].payRate = "$12.00/hour" , students[1].payRate = "$14.00/hour" , students[2].payRate = "$16.00/hour" , students[3].payRate = "$18.00/hour";

students.forEach(Element => console.log(Element))


const gradStudents = [


  { name: "John", city: "California" },


  { name: "Peter", city: "London" },


  { name: "Mathew", city: "Manchester" },


  { name: "Jane", city: "Phoenix" }

]


gradStudents[0].dateOfBirth = "10/10/10", gradStudents[1].dateOfBirth = "10/10/11", gradStudents[2].dateOfBirth = "10/10/12", gradStudents[3].dateOfBirth = "10/10/13";

gradStudents[0].state = "California", gradStudents[1].state = "Oregon", gradStudents[2].state = "New York", gradStudents[3].state = "Maine";

gradStudents[0].payRate = "$12.00/hour", gradStudents[1].payRate = "$14.00/hour", gradStudents[2].payRate = "$16.00/hour", gradStudents[3].payRate = "$18.00/hour";

gradStudents.forEach(Element => console.log(Element))



const multipliers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiplication = [1, 2, 3, 4];
const tableStart = 1
const tableEnd = 12
const table = []


for (var i = 1; i <= 12; i++) {
  for (var j = 1; j <= 12; j++) {
   
    result = "name : " + i + " values: " + i + "x" + j + "=" + i * j;
    table.push(result);


  }
}
console.log(table)
