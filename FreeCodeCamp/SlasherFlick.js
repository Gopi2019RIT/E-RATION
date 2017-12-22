function slasher(arr, howMany) {
	if (howMany == 0){
		return arr;
	}else if (howMany > arr.length){
		var newArr =[];
		return newArr;
	}else {
		console.log(arr.slice(howMany,arr.length));
		return arr.slice(howMany,arr.length);
	}
}

slasher([1, 2, 3], 2);
slasher([1, 2, 3], 0);
slasher([1, 2, 3], 9);
slasher([1, 2, 3], 4);
slasher(["burgers", "fries", "shake"], 1);
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5);