// PREP
// P: take in array of 10 positive integers
// R: return numbers as a string in the form of a phone number
// E: [5, 4, 1, 9, 4, 2, 7, 3, 4, 1] => returns "(541) 942-7341"
//    [6, 1, 9, 6, 3, 8, 0, 7, 7, 8] => returns "(619) 638-0778"

function createPhoneNumber(numbers){

    let areaCode = numbers.slice(0, 3).join("")
    let firstDigits = numbers.slice(3, 6).join("")
    let lastDigits = numbers.slice(6, 11).join("")
    
    return `(${areaCode}) ${firstDigits}-${lastDigits}`
  }