// # Merge Two Sorted Arrays

// **Easy**83 solved85 attemptedTopicsHint**30 XP**

// ---

// Write a function `mergeSortedArrays` that takes two arrays of numbers, each already sorted in ascending order, and merges them into a single sorted array.

// Your solution should take advantage of the fact that both input arrays are already sorted.

// ## Examples
// ```js
// mergeSortedArrays([1, 3, 5], [2, 4, 6]);
// // => [1, 2, 3, 4, 5, 6]

// ```
// ```js
// mergeSortedArrays([1, 2, 3], [4, 5, 6]);
// // => [1, 2, 3, 4, 5, 6]

// ```

// **Example 1**

// **Input:&#x20;**&#x61;rr1 = [1,3,5], arr2 = [2,4,6]

// **Output:&#x20;**[1,2,3,4,5,6]

// **Explanation:&#x20;**&#x49;nterleaved elements from both arrays in sorted order.

// **Example 2**

// **Input:&#x20;**&#x61;rr1 = [1,2,3], arr2 = [4,5,6]

// **Output:&#x20;**[1,2,3,4,5,6]

// **Explanation:&#x20;**&#x41;ll elements of the first array are smaller than all elements of the second array.

// ## Constraints

// - `0 <= arr1.length, arr2.length <= 10^5`
// - `-10^9 <= arr1[i], arr2[j] <= 10^9`
// - `arr1 and arr2 are guaranteed to be sorted in ascending order.`

// ### Topics

// **arraytwo-pointerssortingloops**

// ### Hints

// **Hint 1.&#x20;**&#x55;se two pointers, each tracking the current index of arr1 and arr2 respectively.

// **Hint 2.&#x20;**&#x41;t each step, compare the current elements, append the smaller one to your result array, and advance that pointer.

// **Hint 3.&#x20;**&#x4F;nce one array is fully traversed, remember to append the remaining elements of the other array.

// question ta deeply hints soho read koro then hidden test gulu jate pass kore emn solustion dew  logical error jate na ase

function mergeSortedArrays(arr1, arr2) {
    
    const result = []

    let i = 0
    let j = 0

    while(i < arr1.length && j< arr2.length){
        
        if(arr1[i] <= arr2[j]){
            result.push(arr1[i])
            i++
        }else {
            result.push(arr2[j])
            j++
        }
    }

    while(i < arr1.length){
        result.push(arr1[i])
        i++
    }

    while(j < arr2.length){
        result.push(arr2[j])
        j++
    }


    return result
       
}


console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));
// Output: [1, 2, 3, 4, 5, 6]
