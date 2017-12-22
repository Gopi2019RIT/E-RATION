function getIndexToIns(arr, num) {
  var times = arr.length;
  var count = 0;
  for (var i =0; i < times; i++){
	  if (num > arr[i]){
		  count++;
	  }
  }
  console.log(count);
  return count;
}

getIndexToIns([40, 60], 50);
getIndexToIns([10, 20, 30, 40, 50], 30) ;
getIndexToIns([40, 60], 50) ;
getIndexToIns([3, 10, 5], 3);
getIndexToIns([5, 3, 20, 3], 5);
getIndexToIns([2, 20, 10], 19) ;
getIndexToIns([2, 5, 10], 15);