function mutation(arr) {
	var mutation_true = "false";
	for (var i =0; i <arr[1].length; i++){
	  if (arr[0].toLowerCase().indexOf(arr[1].toLowerCase()[i]) !== -1){
		  mutation_true = true;
	  }else{
		  mutation_true = false;
		  break;
	  }
    }	  
	console.log(mutation_true);
  return mutation_true;
}

mutation(["hello", "hey"]);
mutation(["hello", "Hello"]) ;
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) ;
mutation(["Mary", "Army"]) ;
mutation(["Mary", "Aarmy"]) ;
mutation(["Alien", "line"]) ;
mutation(["floor", "for"]) ;
mutation(["hello", "neo"]) ;
mutation(["voodoo", "no"]) ;
