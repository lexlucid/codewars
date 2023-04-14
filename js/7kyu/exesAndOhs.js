// P: take in string that can contain any char, case insensitive
// R: returns a boolean if num of x's and o's are equal

function XO(str) {
    // count x
  let x = 0
    // count o
  let o = 0
    // loop
  str.toLowerCase().split("").forEach(char => {
    if (char === "x") {
      x++
    } else if (char === "o") {
       o++
    }
  })
  
    // if x count is equal to o count, return true
  if (x === o) {
    return true
  } else {
    return false
  }

    
}

// XO("xooox") // false
// XO("xxxooo") // true
// XO("xxooxo") // true