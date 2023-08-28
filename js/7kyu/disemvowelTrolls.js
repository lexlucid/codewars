// needs to be lowercase

function disemvowel(str) {
    const vowels = ["a", "e", "i", "o", "u"]
    const words = str.toLowerCase().split("")
    let vowelless = ""
    
    for (let i = 0; i < words.length; i++) {
      let isVowel = false
      for (let j = 0; j < vowels.length; j++) {
        if (words[i] === vowels[j]) {
          isVowel = true
          break
        } 
      }
      if (!isVowel) {
        vowelless += words[i]
      }
    }
    return vowelless
  }