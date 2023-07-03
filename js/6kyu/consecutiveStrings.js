// takes string and number, concatenates the elements of the array based on k

// returns the longest concatenated string - if there two or more have the same length, 
// return the first one
// if the length of string is 0, k > n, or k<= 0, return empty string

// how do i get it to concat two elements?
// a loop? 

function longestConsec(strarr, k) {
// iterate through strarr

const n = strarr.length

    if (n === 0) {
        return ""
    } else if (k < n) {
        return ""
    } else if (k <= 0) {
        return ""
    }
}


// longestConsec(["teal", "watermelon", "orange"], 2) --> "watermelonorange"
// longestConsec(["dog", "cat", "rat", "deer"], 2) --> "ratdeer"
