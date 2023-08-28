function arithmetic(a, b, operator){
  const operators = {
    "add": "+",
    "subtract": "-",
    "multiply": "*",
    "divide": "/"
  }
  for (let [key, value] of Object.entries(operators)) {
    if (key === operator) {
      return eval(`a ${value} b`)
    }
  }
}
