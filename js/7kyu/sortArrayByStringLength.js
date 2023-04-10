// Write a function that takes an array of strings as an argument and returns 
// a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different 
// lengths, so you will not have to decide how to order multiple strings of the same 
// length.
// P: array of strings, all strings different lengths
// R: return array of strings sorted by length, shortest to longest
// E: ["Wizard", "Dog", "Hint"] => ["Dog", "Hint", "Wizard"]
//    ["Pine", "Watermelon", "Coffee", "Dig"] => ["Dig", "Pine", "Coffee", "Watermelon"]

function sortByLength (array) {
  
    return array.sort((a, b) => a.length - b.length)
    
  };