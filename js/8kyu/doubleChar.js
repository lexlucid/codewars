// Given a string, you have to return a string in which 
// each character (case-sensitive) is repeated once.

function doubleChar(str) {
    let newArr = []
    str.split("").forEach(char => newArr += char + char)
    return newArr
  }
  