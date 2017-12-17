function largestOfFour(arr) {

  //create blank array	
  var largerArr = [];
  //Step 1 - traverse on each sub array
  for (var i =0; i < arr.length; i++){
      //find largest number from subarray & push element to new array 
	  largerArr.push(Math.max.apply(null,arr[i]));
  }
  console.log(largerArr);
  return largerArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); 
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);