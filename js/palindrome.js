  
/* Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.*/
           
function palindrome(str) {

    let auxStr = str;

    // We need to remove all non-alphanumeric characters
    // We use a regExp 
    let regExp = /\W/g; // I take the one for all non alphanumerical with a global search
    auxStr = auxStr.replace(regExp, "");
    auxStr = auxStr.replace("_", ""); // This is one special case not included in the previous one
    auxStr = auxStr.toLowerCase();

    // I need to reverse the string
    let auxArr = auxStr.split("");
    auxArr = auxArr.reverse();
    const reverseString = auxArr.join("");
           
    // It is time to compare
    if (auxStr === reverseString) {  
        return true;
    }

    return false;
}

// Just some examples to test things
palindrome("eye");
palindrome("2_A3*3#A2");
palindrome("Alicia hola");
    
            
           