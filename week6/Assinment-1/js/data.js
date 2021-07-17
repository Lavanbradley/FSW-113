var resultList = $("#resultList");


export function displayResults(results) {
  console.log(results)
  

  resultList.text(JSON.stringify(results.name + results.height + results.films)) ;
  resultList.text(results) ;


}

//resultList.text(JSON.stringify(results));