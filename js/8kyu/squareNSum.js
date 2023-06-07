function squareSum(numbers){
    let sum = 0
    numbers.forEach(n => {
      let squared = n ** 2
      sum += squared
    })
    return sum
  }