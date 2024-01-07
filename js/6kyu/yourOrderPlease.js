function order(words) {
    const wordsArr = words.split(" ")
    const sortedArr = []

    for (let word of wordsArr) {
        for (let char of word) {
            if (!isNaN(char) && char !== ' ') {
                // sortedArr.splice(char - 1, 0, word)
                let position = parseInt(char) - 1
                sortedArr[position] = word
            }
        }
    }
    return sortedArr.join(" ")
}


// console.log(order("is2 Thi1s T4est 3a" ))
console.log(order("4of Fo1r pe6ople g3ood th5e the2" ))