function addLength(str) {
    const strArr = str.split( " ").map(el => {
        return `${el} ${el.length}`
    })
    return strArr
}
