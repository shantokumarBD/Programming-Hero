// Write a JavaScript function that takes an array of numbers as input and returns the second largest number in the array.

// findSecondLargest([10, 40, 20, 40, 30]); 
// Output: 30 (কারণ 40 হলো সর্বোচ্চ, আর 30 হলো দ্বিতীয় সর্বোচ্চ)

// findSecondLargest([5]); 
// Output: null


const findSecondLargest = (nums) => {
    if(!Array.isArray(nums) || nums.length < 2){
        return null
    }

    let max = nums[0]
    let secmax = null

    for(let num of nums){
        if(num === max) continue
        if(max < num){
            secmax = max
            max = num
        }
        else if(secmax === null || secmax < num ) {
            secmax = num
        }
    }
    return secmax
}
console.log(findSecondLargest([10, 40, 20, 40, 30]));
