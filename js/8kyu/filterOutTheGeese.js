// array of strings,some elements may be repeated
// return array without any of the elements in the geese array
// if present

function gooseFilter (birds) {
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
    const noGeese = birds.filter(bird => {
      return !geese.includes(bird)
    })
    
    return noGeese
  };