// This is what the data returning from IMDB will look like:
var sampleResult = {
  "Search": [
    {
      "Title": "Cool Runnings",
      "Type": "movie",
      "Year": "1993",
      "imdbID": "tt0106611"
    }
  ]
}

// Attach an event listener to the form submit (using jQuery)
$("#movie-search-form").submit(formSubmitted);

// Handle the form submission: go to OMDB and get results
function formSubmitted(event) {
  event.preventDefault();
  var url = "http://omdbapi.com/?s=" + $("#query").val();
  $.get(url, resultsReceived);
}
function resultsReceived(results) {

  // Try putting a debugger here and inspecting the results argument
  // The array of movies lives inside results["Search"]
  // See the sampleResult above for an example

  for (var i = 0; i < results.Search.length; i++) {
    results.Search[i];
    createListItem();

  }

  function createListItem() {
    var list = document.querySelector("#movies");
    var listItem = document.createElement("li");

    listItem.classList.add("movie");
    list.appendChild(listItem);

    var title = document.createElement("div");
    title.classList.add("movie-title");
    listItem.appendChild(title);

    var link = document.createElement("a");
    link.setAttribute("href", "http://www.imdb.com/title/" + results["Search"][i]["imdbID"]);
    link.setAttribute("target", "_blank");
    link.textContent = results["Search"][i]["Title"];
    listItem.appendChild(link);

    var year = document.createElement("div");
    year.classList.add("movie-release-date");
    year.textContent = results["Search"][i]["Year"];

    listItem.appendChild(year);

  }



  // Access the array of movies:
  results["Search"]

  // Access the first movie title
  results["Search"][0]["Title"]
}
