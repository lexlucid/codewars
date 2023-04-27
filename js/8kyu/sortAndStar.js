// P: array of strings, case sensitive, ASCII values
// R: return first value as string with *** between each letter

function twoSort(s) {
    const onceSorted = s.sort()
    return onceSorted[0].split("").join("***")
  }
  
  