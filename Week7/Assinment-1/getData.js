
function getData(){
  axios.get("https://swapi.dev/api/people/")
  .then(res => listData(res.data))
  .catch(err => console.log(err))
}
// getData();

export {getData }