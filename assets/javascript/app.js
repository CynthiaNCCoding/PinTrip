var cities = [];
var states = [];
var countries = [];

// $("#stateName").dropdown('toggle');
function showCity() {
    //AJAX requests
    $(".body").empty();
}
function makeButtons() {
    //alert("hi!");
    $("#btnDiv").empty();
 
    for (var i = 0; i < cities.length; i++) {
        var str = cities[i];
        var replaced = str.replace(/\s/g, '+')  
        var query = replaced;
        var api = 'AIzaSyBvIQ8yyx93va9LZdlfgdOnI7Ce9_gYbvM';
        var getID = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + query +"&key=" + api;
        console.log(getID);
 $.ajax({
          url: getID,
          dataType: 'JSON',
          jsonpCallback: 'callback',
          method: "GET"
    }).done(function(ID) {
    //var query = ;
    console.log(ID);
    var photoRef = ID.results[0].photos[0].photo_reference;
    var photo = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference="+photoRef+"&key="+api;
    console.log(photo);
        var b = $("<div>");
        b.addClass("col-md-4");
        b.addClass("cities");
        b.text(cities[i] + ", " + states[i] + ", " + countries[i]);
        var image = $('<img>');
        image.attr('src', photo);
        b.append(image);
        var checkIt = $("<h2>");
        var link = $("<a>");
        link.addClass("btn btn-default");
        link.text("Check it out!");
        checkIt.append(link);
        b.append(checkIt);
        $("#btnDiv").append(b);
    })
   
 }
}
 $(".search").on("click", function(event) {
    event.preventDefault();
    var city = $("#cityName").val().trim();
    var state = $("#stateName").val().trim();
    var country = $("#countryName").val().trim();
    cities.push(city);
    states.push(state);
    countries.push(country);
    console.log(cities);
    console.log(states);
    console.log(countries);
    makeButtons();
});

$(document).on("click", ".city", showCity);

var index = 0;
function changeBanner () {
	[].forEach.call(document.images,function(v,i) {
		document.images[i].hidden=i!==index
	});
	index=(index + 1) % document.images.length;
}
window.onload = function() {setInterval(changeBanner, 5000)};




