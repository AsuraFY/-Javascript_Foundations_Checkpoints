// // String Manipulation Functions:

// Reverse a String: Write a function that reverses a given string.
function reverseString(str){
	let str_reverse = "";
		for (let i = str.length - 1; i >= 0; i--) {
			str_reverse += str[i];
		}
		return "Reversed String: " + str_reverse;
}


// Count Characters: Create a function that counts the number of characters in a string.
function countCharacters(str){
    let count = 0 ;
    if (typeof(str) === "string") {
        for (let i = 0; i < str.length; i++) {
            if (str[i] != " ") {
                // Increment count for each non-space character
                count++;
            }
        }
    }
    return  "Character Count: " + count;
}


// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function capitalizeWords(str){
	let i = 0 ;
	let str_capitalized = "" ;

	while (i < str.length) {
		if (i === 0) {
			// Capitalize first character
			str_capitalized += str[i].toUpperCase();
		} else if ((str[i-1] === " ") && (str[i] != " ")){
			// Capitalize first character after space ( another word)
			str_capitalized += str[i].toUpperCase();
		} else {
			// Keep everything else to lower case
			str_capitalized += str[i].toLowerCase();
		}
		// Move to next character
		i++; 
	}
	// Return after loop is finished
	return "Capitalised Sentence: " + str_capitalized ;
}


// Test the functions
console.log(reverseString("ftfrde hggjuGFFFHyt   gtft")); // Output: "Reversed String: tftg   tyFGFFFujggh edrftf"
console.log(countCharacters("ftfrde hggjuGFFFHyt   gtft")); // Output: "Character Count: 22" (excluding spaces)
console.log(capitalizeWords("ftfrde hggjuGFFFHyt   gtft")); // Output: "Capitalised Sentence: Ftfrde HggjuGfffhyt   Gtft"