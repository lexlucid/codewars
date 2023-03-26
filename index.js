const btn = document.getElementById("btn")

btn.addEventListener("click", function() {
    console.log(reverseWords("double  spaced  words"))
})


function reverseWords(str) {
    let reverseLetters = str.split("").reverse().join("")
    let newStr = ""
    for (let i = 0; i < reverseLetters.length; i++) {
        newStr += reverseLetters[i]
    }
        let newWord
}

