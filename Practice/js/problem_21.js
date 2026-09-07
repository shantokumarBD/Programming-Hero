function convertCase(str) {
    let res = ""
    for(let char of str){
        if(char >='a' && char <= 'z'){
            res += char.toUpperCase()
        }else if(char >='A' && char <= 'Z'){
            res += char.toLowerCase()
        }else{
            res += char
        }
    }
    return res
}

console.log(convertCase("Hello World!"));
console.log(convertCase("jAvAsCrIpT"));


// Given a string, convert:

// lowercase letters → uppercase
// uppercase letters → lowercase
// digits → unchanged
// symbols → unchanged
// spaces → unchanged

// Example:
// Input: "Hello World!"
// Output: "hELLO wORLD!"

// Input: "jAvAsCrIpT"
// Output: "JaVaScRiPt"