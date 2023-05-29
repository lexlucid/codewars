// array of positive numbers, no floats or non-positive integars
// return sum of two lowest numbers

function sumTwoSmallestNumbers(numbers) {  
    // sort numbers array
    const sortNums = numbers.sort((a,b) => a - b)
    // add numbers at [0] and [1] indices
    return sortNums[0] + sortNums[1]
    // return sum
  }
  
  // sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]) -> 3453455
  // sumTwoSmallestNumbers([19, 5, 42, 2, 77]) -> 7