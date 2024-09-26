// array of strings formatted as x:y, each array made of 10 matches, winning 
// is determined by the total number of points based on the logic descrbied
// return the total number of points for just our team (x) (console log)

function points(games) {
    let points = 0
    let x
    let y
    // loop
    for (let i = 0; i < games.length; i++) {
      // individual game
      const match = games[i].split(":")
  
      x = Number(match[0])
      y = Number(match[1])
      
       if (x > y) {
        points += 3
  
      } else if (x < y) {
        points += 0
  
      } else if (x === y) {
        points += 1
      }
  
    }
    return points
  }
  
  points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) 
  