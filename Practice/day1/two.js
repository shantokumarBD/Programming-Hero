// Write a JavaScript function that takes an array of numbers as input and returns the second largest number in the array.

// findSecondLargest([10, 40, 20, 40, 30]); 
// Output: 30 (কারণ 40 হলো সর্বোচ্চ, আর 30 হলো দ্বিতীয় সর্বোচ্চ)

// findSecondLargest([5]); 
// Output: null


const findSecondLargest = (nums) => {
    if(nums.length < 2){
        return null
    }
    let findFirstLargest = -Infinity;
    let findSecondLargest = -Infinity;

    for(let i = 0; i <nums.length; i++){
        if(nums[i] > findFirstLargest){
            findSecondLargest = findFirstLargest
            findFirstLargest = nums[i]
        }else if(nums[i] > findSecondLargest && nums[i] !== findFirstLargest){
            findSecondLargest = nums[i]
        }
    }

    return findSecondLargest

}
console.log(findSecondLargest([10, 40, 20, 40, 30]));
