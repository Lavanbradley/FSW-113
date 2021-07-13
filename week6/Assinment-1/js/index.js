import { displayResults } from "./data.js"
import data from "./getData.js";
import { getData } from "./getData.js"
/* 
  index.js
*/

$(document).ready(function () {

  "use strict";
  var resultList = $("#resultList");
  resultList.text("... Result");

  var toggleButton = $("#toggleButton");
  toggleButton.on("click", function () {
    resultList.toggle(500);

    if (toggleButton.text() == "Hide") toggleButton.text("Show");
    else toggleButton.text("Hide");
  });

  var listItems = $("header nav li");
  listItems.css("font-weight", "bold");
  listItems.filter(":first").css("font-size", "18px");

  $("#starWarApiSearchForm").on("submit", function (e) {
    // debugger
    // var peopleId = $("#peopleId").val();
    e.preventDefault()
    if (peopleId) {

      resultList.text("Performing search...");

      getData()
      console.log(data, data.length)
      var newData = data
      console.log(newData.length, data.length)
      //  displayResults(data)
    }

    return false;
  });

  // function displayResults(results) {
  //  console.log(results)
  //   resultList.text(JSON.stringify(results));


  // }

});
