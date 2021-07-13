var resultList = $("#resultList");


export function displayResults(results) {
  console.log(results)

  resultList.text(results.name + results.height + results.films);


}