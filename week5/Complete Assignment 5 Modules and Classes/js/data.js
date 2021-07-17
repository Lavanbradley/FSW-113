var resultList = $("#resultList");


export function displayResults(results) {
  console.log(results[0])
console.log(resultList[0])
  resultList.text("")

  resultList[0].append(" Name: "+results[0].name +"||| Height: "+ results[0].height + "||| Films: "+results[0].films);


}