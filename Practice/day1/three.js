// Write a JavaScript function that takes an array of numbers and returns the difference between the largest and the smallest number in the array.

// findDifference([10, 5, 20, 2, 8]); 
// Output: 18 
// ((maxnum = 20 - minnum 2) = 18)

// findDifference([5]); 
// Output: 0

const findDifference = (nums) => {
    if(!Array.isArray(nums) || nums.length < 2){
        return null
    }
    let max = nums[0]
    let min = nums[0]
    for(let num of nums){
        if(num > max){
            max = num
        }
        if(num < min){
            min = num
        }
    }

    return max - min 
}

console.log(findDifference([10, 5, 20, 2, 8]));
