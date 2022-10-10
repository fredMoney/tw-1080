function checkDivisor(n, divisor) {
    if(n % divisor === 0) {
        return true
    } else {
        return false
    }
}

console.log(checkDivisor(6, 3))
console.log(checkDivisor(6, 5))