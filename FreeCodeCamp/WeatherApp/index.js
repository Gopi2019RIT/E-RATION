// get weather info based on longtitue/latitude
function getLocalWeatherInfo(longitude, latitude){
	var url = "https://fcc-weather-api.glitch.me/api/current?lat="+longitude+"&lon="+latitude;
	console.log("url - "+ url);
	var data; 
	
	var getQuote = function(data) {
	    console.log("json Response - "+  JSON.stringify(data));
		var rawJson = JSON.stringify(data);
        var json = JSON.parse(rawJson);
		console.log(json);
		console.log("weather - "+(JSON.stringify(json.weather[0].main)));
		console.log("description - "+(JSON.stringify(json.weather[0].description)));
		console.log("icon - "+(JSON.stringify(json.weather[0].icon)));
		document.getElementById("headerInfo").innerHTML = "Weather Forecast for "+json.name;
		document.getElementById("weathertype").innerHTML = JSON.stringify(json.weather[0].main);
		document.getElementById("localTemp").innerHTML=json.main.temp;
		console.log("img src" + json.weather[0].icon);
		console.log("img src after string" + JSON.stringify(json.weather[0].icon));
		var imgpath = JSON.stringify(json.weather[0].icon).slice(1,-1); //remove first & last char from string
		$("#imgIcon").attr('src', imgpath);
	};
	$(document).ready(function() {
		$.getJSON(url, getQuote, 'jsonp');
	});
}

function filterWeatherInfo(){
	getLocalWeatherInfo();
}


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    alert("Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude);
}


function showResult(result) {
	var longitude = result.geometry.location.lat();
	var latitude = result.geometry.location.lng();
    console.log("longitude - "+longitude);
	console.log("latitude - "+latitude);
	getLocalWeatherInfo(longitude, latitude);
}

function getLatitudeLongitude(callback, address) {
    // If adress is not supplied, use default value 'Banagalore'
    address = address || 'Ferrol, Galicia, Spain';
    // Initialize the Geocoder
    geocoder = new google.maps.Geocoder();
    if (geocoder) {
        geocoder.geocode({
            'address': address
        }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                callback(results[0]);
            }
        });
    }
}

//added click event on Search button
var button = document.getElementById('search');
button.addEventListener("click", function () {
    var address = document.getElementById('inputLocation').value;
    getLatitudeLongitude(showResult, address);
});