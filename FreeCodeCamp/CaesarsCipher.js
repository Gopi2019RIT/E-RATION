function rot13(str) { // LBH QVQ VG!
  var newStr = "";
  for (var i =0; i < str.length; i++){
	  var x  = str.charCodeAt(i);
	  if (x < 65 || x > 90){
		 newStr += String.fromCharCode(x);
	  }else if ( x < 78 ){
		 newStr += String.fromCharCode((x+13));
	  }else {
		newStr += String.fromCharCode(x-13);
	  }
  }
  console.log(newStr);
  return newStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!") ;
rot13("SERR YBIR?") ;
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");

//A65 B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z90