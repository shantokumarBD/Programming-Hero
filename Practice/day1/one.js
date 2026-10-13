// Write a JavaScript function that takes an array of numbers as input and returns the second smallest number in the array.

// findSecondSmallest([5, 2, 8, 1, 5]);
// Output: 2

// findSecondSmallest([10]);
// Output: null

const findSecondSmallest = (nums) => {

  if(!Array.isArray(nums) || nums.length < 2){
    return null
  }

  let min = nums[0]
  let secondmin = null

  for(snum of nums){
    // console.log(snum);

    if(snum === min)continue

    if(snum < min){
      secondmin = min 
      min = snum
    } 
    else if( secondmin === null || snum < secondmin ){
      secondmin = snum
    } 
  }

  return secondmin
};

console.log(findSecondSmallest([5, 2, 8, 1, 5]));
