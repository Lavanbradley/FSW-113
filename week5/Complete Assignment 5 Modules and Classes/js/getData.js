// import{r} from "./index.js"
     var data= [] 

export function getData(){
  var peopleId = $("#peopleId").val();
  var starWarApiSearch = "https://swapi.dev/api/people/" + peopleId;
      
  $.get(starWarApiSearch)
    .success(function(r) {
      data.push(r)
      // displayResults(r);
    })
    .fail(function(err) {
      console.log("Failed to query Star war API");
    })
    .done(function() {
      //
    });
    
}


    



  export default data