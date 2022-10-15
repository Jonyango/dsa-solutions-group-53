/**
 * @param {number[]} nums
 * @return {number}
 */

/**
Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.
Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100

Hint
Count how many times each number appears. If a number appears n times, then n * (n – 1) // 2 good pairs can be made with this number.

 */

 var numIdenticalPairs = function(nums) {
    // Solution 1
    // let count = 0;
    // let resultSet = new Set(nums);

    // for(let x of resultSet) {
    //     let result = (nums.filter((num) => num === x)).length;
    //     count += (result * (result - 1)) / 2;
    // }
    // return count;

    // Solution 2
    // let count = 0;
    // let resultMap = new Map();

    // for(let x of nums) {
    //     if(resultMap.has(x)) {
    //         resultMap.set(x, resultMap.get(x) + 1);
    //     } else {
    //         resultMap.set(x, 1);
    //     }
    // }

    // // first method
    // // for(let [key, value] of resultMap) {
    // //     count += (value * (value - 1)) / 2;
    // // } 

    // // second method
    // resultMap.forEach((element)=>{
    //     count += element * (element - 1) / 2;
    // })
    // return count;

    // Solution Three
    let count = 0;
    let resultMap = new Map();

    for(let x of nums) {
        if(resultMap.has(x)) {
            count += resultMap.get(x);
            resultMap.set(x, resultMap.get(x) + 1);
        } else {  
            resultMap.set(x, 1);
        }
    }
    return count;
};

console.log(numIdenticalPairs([1,2,3,1,1,3]));