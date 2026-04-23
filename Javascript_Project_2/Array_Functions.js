// Array Functions:

// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
function maxAndMin(arr){
    // Initialize max and min to the first element of the array
	let max = arr[0] ;
	let min = arr[0] ;
    
    // Start loop from the second element to compare with max and min
	for (let i=1; i<arr.length; i++){
        // Compare current element with max
		if (arr[i] > max){
			max = arr[i];
		}
        // Compare current element with min   
        if (arr[i] < min) {
			min = arr[i];
		}

	} return "The max is " + max + ", the min is " + min;
}


// Sum of Array: Create a function that calculates the sum of all elements in an array.
function sum(arr){
	let sum = 0 ;
	
	for (let i=0; i<arr.length; i++){
		sum += arr[i]
		} 
	return 'The sum is '+ sum ;
}


// Filter Array: Implement a function that filters out elements from an array based on a given condition.
    // Example: Filter even and odd numbers and share the result
function filterEvenOdd(arr){
	let even_array = [];
	let odd_array = [];
	
	for (let i=0; i<arr.length; i++){
		// Check if the current element is even or odd and push it to the respective array
		if (arr[i] %2 === 0) {
			even_array.push(arr[i]);
		} else {
			odd_array.push(arr[i]);
		}
		} 
    let result = `The even numbers are [${even_array.join(", ")}], the odd numbers are [${odd_array.join(", ")}]`;
	return result
    
}


// Test the functions
console.log(maxAndMin([3, 1, 4, 1, 5, 9])) ;  // Output: The max is 9, the min is 1
console.log(sum([3, 1, 4, 1, 5, 9])) ;		// Output: The sum is 23
console.log(filterEvenOdd([3, 1, 4, 1, 5, 9])) ;  // Output: The even numbers are [4], the odd numbers are [3, 1, 1, 5]