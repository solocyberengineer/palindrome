/*
=== String challenge ====
Palindrome: a word, phrase, or sequence that reads the same backward as forwards, e.g. madam
- Create a repo called a palindrome.
- Open your cloned repo into a VS code
- Create a function called isPalindrome that will take a single parameter and return a string value.
The output should look like: madam is a palindrome if the user passes madam as an argument.
NB: When creating a function, we refer to the variable between the parenthesis as a parameter.
When we call or invoke a function, we refer to it as an argument.
*/

function isPalindrome(word){
    dup_word = word.split('').reverse().join('')
    return (dup_word == word)
}

// let result = isPalindrome('madam')
// let result = isPalindrome('eve')
// let result = isPalindrome('civic')
// let result = isPalindrome('radar')
// let result = isPalindrome('level')
// let result = isPalindrome('rotor')
let result = isPalindrome('refer')
console.log(result)
