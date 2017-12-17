function confirmEnding(str, target) {
  //Step 1 : extract 2nd word from first string
  var res = str.substr(parseInt(str.length-target.length), parseInt(target.length));
  console.log(res);
  
  //Step 2 : Compare & return true/false
  if (res === target){
	  return true;
  }else{
	  return false;
  }
}

confirmEnding("Bastian", "n");
//confirmEnding("Connor", "n");
//confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");
//confirmEnding("He has to give me a new name", "name");
//confirmEnding("Open sesame", "same");
//confirmEnding("Open sesame", "pen");
//confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain");