// It's the academic year's end, fateful moment of your school report. 
// The averages must be calculated. All the students come to you and entreat 
// you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks){
  // create counter 
  let counter = 0
  // iterate through marks, adding each number to counter
  for (let i = 0; i < marks.length; i++) {
    counter += marks[i]
  }
  
  // divide counter by the number of marks in array (marks.length)
  return counter / marks.length

}