// Task:
// Write a JavaScript function that takes a string (text) as input and returns the total number of vowels (a, e, i, o, u) present in that string.

// Conditions:

// The function should be case-insensitive. This means it must count both lowercase (a, e...) and uppercase (A, E...) vowels correctly.
// Use a loop (for or for...of) to iterate through the characters of the string.


const countVowels = (char) => {
    let upercaseChar = char.toLowerCase()
    const vowels = ["a" , "e" , "i" , "o" , "u"]

    let store = 0
    for(let vowel of upercaseChar){
        // console.log(vowel);
        
        if(vowels.includes(vowel)){
            store ++
        }
    }
    return store
}

console.log(countVowels("javascript"));
