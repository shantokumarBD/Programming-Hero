function sumOfEvenDigits(number) {
 let evenSum = 0

 for(let num of String(number)){
    // console.log(num);
    let convertNum = Number(num)

    if(convertNum % 2 === 0){
        evenSum += convertNum
    }    
 }

 return evenSum
}

console.log(sumOfEvenDigits(12345));
console.log(sumOfEvenDigits(708));




// Given a positive integer, calculate the sum of all its even digits.

// Even digits:
// 0, 2, 4, 6, 8

// Example:
// Input: 12345
// Output: 6

// Explanation:
// 2 + 4 = 6

// Input: 708
// Output: 8

// Explanation:
// 0 + 8 = 8