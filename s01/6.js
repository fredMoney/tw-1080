// fct recursiva care returneaza 
// nr de pe poz n in sirul lui fibo

function findFibo(pos) {
    if(pos === 0 || pos === 1) {
        return 1
    } else {
        return findFibo(pos - 1) + findFibo(pos - 2)
    }
}

if(process.argv.length < 3) {
    console.log('not enough arguments')
} else {
    const n = parseInt(process.argv[2])
    console.log(findFibo(n))
}
