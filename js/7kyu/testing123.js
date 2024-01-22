const number = function (array) {
    let lineNumber = []
    array.forEach(function(element, index) {
        lineNumber.push(`${index + 1}: ${element}`)
    })
    return lineNumber
}