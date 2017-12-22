function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var newArr =[];
  for (var i =0; i <arr.length; i++){
	  if (Boolean(arr[i]) == true){
		  newArr.push(arr[i]);
	  }
  }
  console.log(newArr);
  return newArr;
}

bouncer([7, "ate", "", false, 9]);
bouncer(["a", "b", "c"]);
bouncer([false, null, 0, NaN, undefined, ""]);
bouncer([1, null, NaN, 2, undefined]) ;
