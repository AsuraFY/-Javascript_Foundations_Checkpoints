// Mathematical Functions:

// Factorial: Write a function to calculate the factorial of a given number.
function factorial(n){
	let factorial_N = 1 //by default the factorial of 0 and 1 is 1

    // for n strating from 2
    for (let i=n; i>1  ;  i--){
        factorial_N *= i;
    }

	let result = `The factoriel of ${n} is : ${factorial_N}`;
	return result;
}


// Prime Number Check: Create a function to check if a number is prime or not.
function isPrimeNumber(n){
	
	// 1 is not a prime number
	if (n < 2) { 
		return false
	}
	// for numbers >= 2
	for (let i=2; i<n ; i++) {
		if (n % i === 0) {
			return false ;
		}
	} 
	// after the for loop is finished , no factor found 
	return true ;
}



// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
function fibonacci(n){
    // Mathematically and computationally, the Fibonacci of 0 is 0 and the Fibonacci of 1 is 1.
    let f= [0,1] ; // f[0] = 0, f[1] = 1 
    let sumF = 0 ;

    //for numbers from 2 to n
    for (i=2 ; i<=n; i++) {
        f[i] = f[i-1] + f[i-2];
        sumF += f[i] ;
    }
    for (let x of f) {
        sumF += x ;
    }

    // fibonacci(n) is f[n] 
    // sum_fibonacci(n) is the sum of all the fibonacci numbers from 0 to n ( included) which is stored in sumF
    // the array f contains all the fibonacci numbers from 0 to n ( included) which is printed using join method to convert it to string
    let result = `fibonacci(${n}th): ${f[n]} ;  sum_fibonacci(${n}):  ${sumF} ; Array : [${f.join(", ")}]` ;
    return result ;
}







//  Test the functions
console.log(factorial(5)) ;
console.log(`isPrimeNumber(7): ${isPrimeNumber(7)}`) ;
console.log(fibonacci(1)) ;
console.log(fibonacci(10)) ;
