function countSheeps(arrayOfSheep) {
    let sheepCount = 0
    arrayOfSheep.forEach(baa => baa === true ? sheepCount++ : sheepCount)
    return sheepCount
  }