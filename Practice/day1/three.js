// Write a JavaScript function that takes an array of numbers and returns the difference between the largest and the smallest number in the array.

// findDifference([10, 5, 20, 2, 8]); 
// Output: 18 
// ((maxnum = 20 - minnum 2) = 18)

// findDifference([5]); 
// Output: 0

const findDifference = (nums) => {
    if(nums.length < 2 ){
        return 0
    }
    let maxNum = -Infinity;
    let minNum = Infinity

    for (let i = 0; i <nums.length; i++){
        if(nums[i] > maxNum){
            maxNum = nums[i] 
        }
        if(nums[i] < minNum){
            minNum = nums[i]
        }
    }
    return maxNum - minNum
}

console.log(findDifference([10, 5, 20, 2, 8]));
