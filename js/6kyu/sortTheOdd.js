function sortArray(array) {
    let odds = []
    
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 !== 0) {
        odds.push(array[i])
        array[i] = "odd"
      }  
    }
      
    odds.sort((a, b) => a - b)
    
    let oddsIndex = 0
    
    for (let i = 0; i < array.length; i++) {
      if (array[i] === "odd") {
        array[i] = odds[oddsIndex]
        oddsIndex++
      }
    }
    return array
  }