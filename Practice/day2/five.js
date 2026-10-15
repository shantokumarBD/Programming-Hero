// Longest Increasing Streak
// Easy
// 81 solved
// 81 attempted
// Topics
// Hint
// 30 XP
// Given an array of numbers, return the length of the longest contiguous streak in which each number is strictly greater than the previous number.

// If the input array is empty, return 0.

// Examples
// longestIncreasingStreak([1, 2, 3, 1, 2]);
// // => 3 (streak [1, 2, 3])
// longestIncreasingStreak([5, 4, 3, 2, 1]);
// // => 1 (no adjacent element is strictly greater)
// Example 1
// Input: nums = [1,2,3,1,2]

// Output: 3

// Explanation: The subarray [1, 2, 3] has length 3 and is strictly increasing.

// Example 2
// Input: nums = [5,4,3,2,1]

// Output: 1

// Explanation: No element is greater than its previous element, so any single element of length 1 is the longest streak.

// Constraints
// 0 <= nums.length <= 100_000
// -10^9 <= nums[i] <= 10^9

// Topics
// array
// loops
// adjacent-comparison
// algorithms

// Hints
// Hint 1. Keep track of the current streak length and the maximum streak length seen so far.
// Hint 2. When iterating from index 1 to the end, compare `nums[i]` to `nums[i - 1]`. If it is strictly greater, increment the current streak count.
// Hint 3. If it is not greater, reset the current streak count back to 1.Longest Increasing Streak
// Easy
// 81 solved
// 81 attempted
// Topics
// Hint
// 30 XP
// Given an array of numbers, return the length of the longest contiguous streak in which each number is strictly greater than the previous number.

// If the input array is empty, return 0.

// Examples
// longestIncreasingStreak([1, 2, 3, 1, 2]);
// // => 3 (streak [1, 2, 3])
// longestIncreasingStreak([5, 4, 3, 2, 1]);
// // => 1 (no adjacent element is strictly greater)
// Example 1
// Input: nums = [1,2,3,1,2]

// Output: 3

// Explanation: The subarray [1, 2, 3] has length 3 and is strictly increasing.

// Example 2
// Input: nums = [5,4,3,2,1]

// Output: 1

// Explanation: No element is greater than its previous element, so any single element of length 1 is the longest streak.

// Constraints
// 0 <= nums.length <= 100_000
// -10^9 <= nums[i] <= 10^9

// Topics
// array
// loops
// adjacent-comparison
// algorithms

// Hints
// Hint 1. Keep track of the current streak length and the maximum streak length seen so far.
// Hint 2. When iterating from index 1 to the end, compare `nums[i]` to `nums[i - 1]`. If it is strictly greater, increment the current streak count.
// Hint 3. If it is not greater, reset the current streak count back to 1.

function longestIncreasingStreak(nums) {

  if (nums.length === 0) {
    return 0;
  }


  let currentStreak = 1;
  let longestStreak = 1;


  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      currentStreak++; 
    } else {
      currentStreak = 1; 
    }

   
    if (currentStreak > longestStreak) {
      longestStreak = currentStreak;
    }
  }

  return longestStreak;
}


console.log(longestIncreasingStreak([1, 2, 3, 1, 2])); // Output: 3
console.log(longestIncreasingStreak([5, 4, 3, 2, 1])); // Output: 1
console.log(longestIncreasingStreak([]));             // Output: 0
console.log(longestIncreasingStreak([2, 2, 2]));       // Output: 1 (সমান হলে বড় নয়, তাই ১)
