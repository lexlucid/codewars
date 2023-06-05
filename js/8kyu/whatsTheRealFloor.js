// takes in integer, negatives stay the same, ground floor is 0, anything that is >= 13
// is moved down by 2 
// return floor number converted to american number system

function getRealFloor(n) {
    if (n >= 13) {
      return n - 2
    } else if (n < 0) {
      return n 
    }
    else {
      return n - 1
    }
  }
  
  
  