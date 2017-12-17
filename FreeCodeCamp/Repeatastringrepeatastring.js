function repeatStringNumTimes(str, num) {
  var strValue ="";
  if ( num < 0){
	  return strValue;
  }
  else{
    for (var i = 0; i<num; i++){
		strValue +=str;
	}
	console.log(strValue);
	return strValue;
  }	  
}

repeatStringNumTimes("abc", 3);
repeatStringNumTimes("*", 3) ;
repeatStringNumTimes("abc", 3);
repeatStringNumTimes("abc", 4);
repeatStringNumTimes("abc", 1);
repeatStringNumTimes("*", 8);
repeatStringNumTimes("abc", -2);