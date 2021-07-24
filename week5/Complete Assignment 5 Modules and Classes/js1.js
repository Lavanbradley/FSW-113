
function getData(){
  axios.get("https://swapi.dev/api/people/")
  .then( Response =>{
     for(let i = 0; i < Response.data.length; i++){
     console.log(Response)
     }
  } )
  .catch(err => console.log(err))
}
getData();
