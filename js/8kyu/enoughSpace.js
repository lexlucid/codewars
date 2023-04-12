// P: all positive integers, amount of people the bus can hold, 
//    num people already on bus excluding driver, num people waiting 
//    to get on bus excluding driver
// R: return num of passengers that can't be taken on the bus

function enough(cap, on, wait) {
    // check how much space is left over
    const spaceRemaining = cap - on
    // check if waiting is greater than the remaining space
    if (spaceRemaining >= wait) {
      return 0
    } else {
      return wait - spaceRemaining
    }
  }
  
  // enough(20, 15, 5) // return 0
  // enough(30, 25, 7) // return 2
  // enough(5, 5, 5) // return 5