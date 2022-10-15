/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

 * 
 * 
 */

 var twoSum = function(nums, target) {
    let answer = [];
    let resultMap = new Map();

    nums.some((item, index) => {
        let secondNum = target - item;
        
        if(resultMap.has(secondNum)){
            return answer.push(resultMap.get(secondNum), index)
        }else{
            resultMap.set(item, index)
        }
    })

    return answer;
};

console.log(twoSum([-21,30,7,2], 9));