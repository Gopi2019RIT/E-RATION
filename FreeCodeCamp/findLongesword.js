function findLongestWord(str) {
  var arrayStr = str.split(" ");
  var maxLength = 0;
  for (i=0; i<arrayStr.length;i++){
    
    if (arrayStr[i].length > maxLength){
      maxLength = arrayStr[i].length;
	  console.log ("word - " + arrayStr[i]+ ", Length - "+arrayStr[i].length);
	  console.log("maxLength value - "+maxLength);
    }
  }
  return maxLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
findLongestWord("May the force be with you");
findLongestWord("Google do a barrel roll");
findLongestWord("What is the average airspeed velocity of an unladen swallow");
findLongestWord("What if we try a super-long word such as otorhinolaryngology");