function sumAll(arr) {
	
	var sum = 0;
	for (var i = Math.min.apply(null, arr); i<=Math.max.apply(null, arr);i++){
		sum += i;
	}
	console.log(sum);
  return sum;
}

sumAll([1, 4]);
sumAll([4, 1]);
sumAll([5, 10]);
sumAll([10, 5]);

