// fct verifica daca nr e prim
// primeste nr din cmd line

function checkPrime(n) {
    for(let i = 2; i < Math.sqrt(n) + 1; i++) {
        if(n % i === 0) {
            return false
        }
    }
    return true
}

if(process.argv.length < 3) {
    console.log('not enough arguments')
} else {
    const n = parseInt(process.argv[2])
    console.log(checkPrime(n))
}

// console.log(checkPrime(4))
// console.log(checkPrime(7))
