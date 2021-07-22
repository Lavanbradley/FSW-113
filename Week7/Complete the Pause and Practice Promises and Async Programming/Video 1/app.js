const fetch = require('node-fetch');
const starWarApi = `http://swapi.dev/api`
const starWarCitizenUrl = `${starWarApi}/people/1`

fetch(starWarCitizenUrl,{
  method: 'GET', //or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  }
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data)

})
.catch((error)=>{
  console.log('Error:', error)
})