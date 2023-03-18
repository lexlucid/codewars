// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); Should return '10 + 2'
// expandedForm(42); Should return '40 + 2'
// expandedForm(70304); Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.


function expandedForm(num) {
  const places = String(num).split("")
  const iterator = places.keys()
  
  for (const key of iterator) {
    console.log(key + 1)
  }
}

// It is shown as a sum of each digit multiplied by its matching place value (ones, tens, hundreds, etc.)

// divide each number by 10, then modulus 10

// take an integar as a parameter 