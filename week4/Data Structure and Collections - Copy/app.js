var p = document.getElementById('one');
// function getData(){
//   fetch("https://swapi.dev/api/people/")
//   .then(res => res.json())
//   .then(res => {
//     for(let i =0; i < res.results.length; i++){
//       console.log(res.results[i].name)
//     }
//   })
// }
// getData();

// function show(getData){
 

// }
fetch("https://swapi.dev/api/people/")
.then(res => res.json())
.then(res => {
  console.log(res)
  let data = res
  return data
})
console.log(data);