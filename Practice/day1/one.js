// Write a JavaScript function that takes an array of numbers as input and returns the second smallest number in the array.

// findSecondSmallest([5, 2, 8, 1, 5]);
// Output: 2

// findSecondSmallest([10]);
// Output: null

const findSecondSmallest = (nums) => {
  if (nums.length < 2) {
    return null;
  }
  let firstNum = Infinity;
  let secondNum = Infinity;

  for (let i = 0; i < nums.length; i++) {

    if(nums[i] < firstNum){
        secondNum = firstNum;
        firstNum = nums[i];
    }else if(nums[i] < secondNum && nums[i] !== firstNum){
        secondNum = nums[i]
    }
  }

  return secondNum;
};

console.log(findSecondSmallest([5, 2, 8, 1, 5]));
