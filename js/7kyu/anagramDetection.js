// string argument, case insensitive
// return true if they are anagrams 

function isAnagram(test, original) {
    const ogArr = original.toLowerCase().split("").sort().join()
    const testArr = test.toLowerCase().split("").sort().join()
    
    return ogArr === testArr
    
  }