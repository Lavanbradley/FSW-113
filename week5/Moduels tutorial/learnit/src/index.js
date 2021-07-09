
//Complete Practice Exercise: Modules
//CLO1

// import { Course, Session } from "./module1" 
// console.log( "From Module 1", Course)
// console.log( "From Module 1", Session)
//The console output is From module 1 FSW 113, and From Module 1 02/02/2020

//CLO2

// import { Course as CourseId, Session } from "./module2";
// console.log( "From Module 2", CourseId)
// console.log( "From Module 2", Session)

//The console output is From module 1 FSW 113, and From Module 1 02/02/2020, course is now courseId

// CLO3
// import { Course as CourseId , Session } from "./module3" 
// console.log( "From Module 3", CourseId)
// console.log( "From Module 3", Session)

//From Module 3 FSW113 and From Module 3 02/02/2020 Course Id and session pulled from module 3

//CLO4

// console.log("Load index.js.... Start")

// import { Course as CourseId , Session } from "./module4" 
// console.log( "From Module 4", CourseId)
// console.log( "From Module 4", Session)

// console.log("Load index.js.... End")

//Load Module 4 .... Start, Load Module 4 ..... End, Load index.js.... Start
//From Module 4 FSW113, From Module 4 02/02/2020, Load index.js.... End

//CLO5

// import Course  from "./module5"
// console.log( "From Module 5", Course)

//From module 5 fsw113

//CLO6
// import { default as Course}  from "./module6" 
// console.log( "From Module 6", Course)

//From module 6 fsw113

//CLO7

// import { default as Course}  from "./module7" 
// console.log( "From Module 7", Course)

//Module 7 does not contain a default export

//CLO8

// import { default as Course, liveSession as Session}  from "./module8"
// console.log( "From Module 8", Course)
// console.log( "From Module 8", Session)

//Form Module 8 fsw113, from module 8 02/02/2020

//CLO9

// import *  as mod from "./module9" 
// console.log( "From Module 9", mod.courseName)
// console.log( "From Module 9", mod.liveSession)

//Form Module 9 fsw113, from module 9 02/02/2020

//CLO10

// import { courseName as Course, liveSession as Session} from "./module10" 

// courseName ="FSW220"
// console.log( "From Module 10", courseName)
// console.log( "From Module 10", liveSession)

//It gives an error. Not defined

//CLO11

// import *  as mod from "./module11" 

// mod.courseName = "FSW220"
// mod.liveSession = "Spring2020"

// console.log( "From Module 11", mod.courseName)
// console.log( "From Module 12", mod.liveSession)

//Gives an error

//CLO12

// import *  as mod from "./module11" 



// mod.courseName = "FSW113"
// mod.liveSession = "Spring2020"

// console.log( "From Module 12", mod.courseName)
// console.log( "From Module 12", mod.liveSession)

// console.log( "From Module 12", mod.combine())

//Combine is not exported

//Complete Practice Exercise: Classes
//CLO1

// import { default as Person } from "./person1"
// console.log( "From Person1.js ", typeof Person)

//From Person1.js function

//CLO2

// import { default as Person } from "./Person2"

// let person = new Person( )
// console.log(typeof person)

// console.log( person.hello( ))

// console.log( `is person instance of  Person  is ${ person instanceof Person}`)

 //object
 //Hi i am a person
 //Undefined
 //Is person instance of person is true

 //CLO3

//  import { default as Person } from "./Person3"

// let person = new Person( )



// console.log( person.hello( ))

//Constructing person, hi i am a person, undefined

//CLO4
// import { default as Person } from "./Person3"

// let person = new Person( )



// console.log( person.hello( ))
//Constructing person, hi i am a person, undefined

//CLO5

// import { default as Person } from "./Person5"

// let person = new Person( )
// console.log( person.hello( ))

//Constructing person, hi i am a person, undefined

//CLO6
// import { default as Student } from "./Student"

// let student = new Student( )



// console.log( student.hello( ))

//Error

//CLO7

// import { default as Student } from "./Student7"

// let student = new Student("John Woods" )



// console.log( student.hello( ))

 //Constructing Person  John Woods, Student Class constructor,Hi I am a student a specialized person,undefined


 //CLO8

//  import { default as Student } from "./Student8"

// let student = new Student("John Woods" )



// console.log( student.hello( ))

 //Constructing Person  John Woods, Student Class constructor,Hi I am a student a specialized person,undefined

 //CLO9

//  import { default as Student } from "./Student9"

// let student = new Student("John Woods" )



// console.log( student.hello( ))

//Constructing Person  John Woods, Student Class constructor ,Hi I am a student a specialized person,Hi I am a person ,undefined


//CLO10

// import { default as Student } from "./Student10"

// let student = new Student("John", "Smith" )

// console.log( student.allCaps( ))

// console.log( student.fullName( ))

//The full name of the person = SMITH, JOHN

//CLO11

// import { default as Student } from "./Student11"

// let student = new Student("John", "Smith" )



// console.log( student.allCaps( ))

// console.log( student.fullName( ))

//Error, first has already been declared


//CLO12
// import { default as Person } from "./Person12"



// console.log( Person.fullName('Jammy', 'Harding' ))

//Error

//CLO13

// import { default as Person } from "./Person13"

// Person.firstName = 'Mary'

// Person.lastName = 'Lutten'

// console.log( Person.firstName, Person.lastName)

 //Mary Lutten


 //CLO14

//  import { default as Person } from "./Person13"

// Person.firstName = 'Mary'

// Person.lastName = 'Lutten'

// console.log( Person.firstName, Person.lastName)

//Mary Lutten



