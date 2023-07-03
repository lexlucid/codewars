const humanYearsCatYearsDogYears = function(humanYears) {
    let catYears = 15
    let dogYears = 15
    
  // if humanYear is 1, 15 for both
  // if hy is 2, 9 for both
  // if hy is greater than 2, +4 cy/+5 dy per human year
    if (humanYears > 2) {
      catYears = 24 + (humanYears - 2) * 4
      dogYears = 24 + (humanYears - 2) * 5
    } else if (humanYears === 2) {
      catYears += 9
      dogYears += 9
    }
    return [humanYears, catYears, dogYears];
  }
  