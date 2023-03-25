// For simplicity, you'll have to capitalize each word, check out how contractions
//  are expected to be in the example below.

String.prototype.toJadenCase = function() {
    const words = this.split(" ").map(word => {
      return word[0].toUpperCase() + word.substring(1)
    }).join(" ")
    return words
  }