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

let wordInput = document.querySelector('#word');
let output = document.querySelector('#output')

function isPalindrome(){
    dup_word = wordInput.value.split('').reverse().join('')
    if(dup_word == wordInput.value) {
        output.innerHTML = `'${dup_word}'<br> is a palindrome`
    } else if( dup_word != wordInput.value ){
        output.innerHTML = `'${dup_word}'<br> is not a palindrome`
    }
}

// let result = isPalindrome('madam')
// let result = isPalindrome('eve')
// let result = isPalindrome('civic')
// let result = isPalindrome('radar')
// let result = isPalindrome('level')
// let result = isPalindrome('rotor')
// let result = isPalindrome('refer')
// console.log(result)

wordInput.oninput = isPalindrome;


