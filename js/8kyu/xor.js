function xor(a, b) {
    if (a === true && b === false) {
      return true
    } else if (b === true && a === false) {
      return true
    } else if (a === true && b === true) {
      return false
    } else {
      return false
    }
}