const fetch = require('node-fetch');

const URL = `https://swapi.dev/api`
const peopleEndPoint = `${URL}/people`
let peopleData = []
const getData = async function(id){
  const idEndPoint = `${peopleEndPoint}/${id}`
 const response = await fetch(idEndPoint)
const data = await response.json()

   peopleData = await {...peopleData, [id]:data}
  
}
var result = []
var ids = [2,3,6,10,20,30,300]
ids.forEach(id => {

 // console.log(id)
 result.push(getData(id)) 
})


var output = Promise.all(result).then(response => {
  console.log(peopleData)
}).catch(error => {
  console.log(error)
})

