for (i = 0; i < 100; i++){
	
	// Flag to set if the output has already been printed
	alreadyOutputed = 0
	
	// Flag that checks to see if current value is a multiple of both 3 and 5
	if ((i % 3 == 0) && (i % 5 == 0)){
		console.log("FizzBuzz")
		alreadyOutputed = 1
		
	// Flag that checks to see if current value is a multiple of both 3 and 5
	} else if ((i % 3 == 0) && (alreadyOutputed == 0)){
		console.log("Fizz")
		alreadyOutputed = 1
		
	// Flag that checks to see if current value is a multiple of both 3 and 5
	} else if ((i % 5 == 0) && (alreadyOutputed == 0)){
		console.log("Buzz")
		alreadyOutputed = 1
		
	// // Flag that checks to print current value if it is not a multiple of either number
	} else {
		console.log(i)
	}
// Tested and working as of 6 - 2 - 2022 by Jacob Clouse
}

