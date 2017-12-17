function titleCase(str) {
  //Step 1 : convert into lowercase & split
  var listStr = str.toLowerCase().split(" "); 
  console.log("Input String: " + str);
  var titleString = "";
  //Step 2 : traverse each item in array
  for (var i =0; i<listStr.length; i++){
	 //Step 3 : get first char,convert to uppercase
		var tempString = listStr[i].slice(0,1).toUpperCase() + listStr[i].slice(1,listStr[i].length);
		if (titleString.length>0){
			titleString += " "+tempString;
		}else{
			titleString += tempString;
		}
  }
  console.log(titleString);
}

titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt");
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");