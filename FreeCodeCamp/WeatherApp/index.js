// Random Quote Generator
function getLocalWeatherInfo(){
	var url = "https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139";
	var data; 
	
	var getQuote = function(data) {
	    console.log("json Response - "+  JSON.stringify(data));
		var rawJson = JSON.stringify(data);
        var json = JSON.parse(rawJson);
		console.log(json);
		console.log("weather - "+(JSON.stringify(json.weather[0].main)));
		console.log("description - "+(JSON.stringify(json.weather[0].description)));
		console.log("icon - "+(JSON.stringify(json.weather[0].icon)));
		document.getElementById("weatherType").innerHTML = JSON.stringify(json.weather[0].main);
		document.getElementById("localTemp").innerHTML=json.main.temp;
		document.getElementById("imgIcon").src=JSON.stringify(json.weather[0].main);
		
	
	};
	$(document).ready(function() {
		$.getJSON(url, getQuote, 'jsonp');
	});
}

function filterWeatherInfo(){
	getLocalWeatherInfo();
}