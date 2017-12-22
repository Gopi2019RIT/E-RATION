/* function destroyer(arr,first, second) {
	console.log(arr);
	var newArr =[];
  for (var i =0; i < arr.length ; i++){
	  console.log("arr[0][i].toLowerCase() " + arr[i]);
	  console.log("arr[1] " + first);
	  console.log("arr[2] " + second);
	  if ((arr[i] == first)  || (arr[i] == second)){
		  
	  }else{
		  console.log(arr[i]);
		  newArr.push(arr[i]);
		  console.log("after push - "+newArr);
	  }
  }
  console.log(newArr);
  return newArr;
} */

function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  console.log(arr.length);
  console.log(args.length);
  for (var i = 0; i < arr.length; i++) {
    for (var j = 1; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  //console.log(arr.filter(Boolean));
  return arr.filter(Boolean);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
destroyer([3, 5, 1, 2, 2], 2, 3, 5);
destroyer([2, 3, 2, 3], 2, 3);
destroyer(["tree", "hamburger", 53], "tree", 53);

