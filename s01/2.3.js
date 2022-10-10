// am un str '5 3 2 6'
// am split(' ')
// vreau un array = [5, 3, 2, 6]
// exemplificare array.push(element)

function splitNumbers(s) {
    const arr = []
    for(const element of s.split(' ')) {
        arr.push(parseInt(element))
    }
    return arr
}

console.log(typeof splitNumbers('5 3 2 6'))
console.log(splitNumbers('5 3 2 6'))
