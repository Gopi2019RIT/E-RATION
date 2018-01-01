function getCurrentValue(){
	var currentValue = document.getElementById("currentValue").innerHTML; //read value
	currentValue=parseInt(currentValue,10) //remove leading zero, make number
	console.log('getCurrentValue() --> currentValue : '+currentValue);
	return currentValue;
}

function clearCurrentValue(event){
	$("#clear").click(function(event){
		console.log('clearCurrentValue() --> .. currentValue === 0');
		$("#currentValue").html(0);
		getCurrentValue();
	})
}

//clearCurrentValue(event);

function clickButton(event){
	var thingClicked;
	$(".btn").click(function(event) {
	 thingClicked = this.innerHTML
	 console.log("clickButton --> you clicked: ", thingClicked)
	 console.log('clickButton --> typeof thingClicked is :', typeof thingClicked)
	  //$("#currentValue").html(thingClicked)
	
	if($(this).hasClass("num")){
		console.log('clickButton --> ${thingClicked} is a num class!');
		var currentValue=getCurrentValue();
		currentValue=currentValue.toString(); //make number  a string
		var newString = currentValue+thingClicked; //add into newString
		var newNumber = parseInt(newString, 10); //remove leading 0
		console.log('replace currentValue with newNumber :', newNumber);
		$("#currentValue").html(newNumber);
	}
	})
	return thingClicked;
}

clickButton(event);