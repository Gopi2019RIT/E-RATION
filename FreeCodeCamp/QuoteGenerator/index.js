var quotes = [
	'The Way Get Started Is To Quit Talking And Begin Doing.',
	'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.',
	'Don’t Let Yesterday Take Up Too Much Of Today.',
	'You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.',
	'It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.',
	'If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.',
	'People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.',
	'Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.',
	'Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur.',
	'We May Encounter Many Defeats But We Must Not Be Defeated.',
	'Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.',
	'Imagine Your Life Is Perfect In Every Respect; What Would It Look Like?',
	'We Generate Fears While We Sit. We Overcome Them By Action.'
]

	
function quoteFromArray(){
	var randomNumber = Math.floor(Math.random()*quotes.length);
	//console.log(randomNumber);
	document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}

// Random Quote Generator
function quoteFromAPI(){
	var url = "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
	var data; 
	
	var getQuote = function(data) {
	    console.log("json Response - "+  JSON.stringify(data));
		document.getElementById("quoteDisplay").innerHTML = data.quoteText;
	};
	$(document).ready(function() {
		$.getJSON(url, getQuote, 'jsonp');
	});
}

function displayQuote(){
	if (document.getElementById("togglebutton").checked == true){
		quoteFromAPI();
	}else{
		quoteFromArray();
	}
}


function displayQuoteSource(){
	if (document.getElementById("togglebutton").checked == true){
		document.getElementById("sourceOfQuote").innerHTML="Quote source is API";
	}else if (document.getElementById("togglebutton").checked == false){
		document.getElementById("sourceOfQuote").innerHTML="Quote source is JavaScript Array";
	}
}

//https://medium.freecodecamp.org/creating-a-bare-bones-quote-generator-with-javascript-and-html-for-absolute-beginners-5264e1725f08
//https://codepen.io/kkoutoup/pen/zxmGLE