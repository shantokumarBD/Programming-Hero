// Task:
// Write a JavaScript function that takes an array as input and returns a new array containing only the numbers that appear more than once (duplicates).

// Conditions & Validation:

// Validation: At the very beginning of the function, check if the input is actually an Array and if it is not empty. If it is not an array or if it is empty, return null. (Hint: use !Array.isArray(...) and .length === 0).
// // Use two empty arrays inside your function: one to keep track of the numbers you have seen so far (seen = []), and another to store the duplicate numbers (dupli = []).



const findDuplicate = (nums) => {
    if(!Array.isArray(nums) || nums.length === 0){
        return null
    }
    const dupli = []
    const seen = []

    for(let num of nums){
        if(!seen.includes(num)){
            seen.push(num)
        }else{
            // dupli.push(num)
            if(!dupli.includes(num)){
                dupli.push(num)
            }
        }
              
    }
    return dupli
}



console.log(findDuplicate([1, 2, 5, 3, 1, 5, 4, 1]));

