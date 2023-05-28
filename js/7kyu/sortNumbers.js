// sort non-empty array of numbers
// returns array, ascending -> if null/empty/nil return empty array

function solution(nums){
    if (nums === null || nums === []) {
      return []
    } else {
      return nums.sort((a, b) => a - b)
    }
   }