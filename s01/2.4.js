// fct primeste arr si elem
// returneaza arr concatenat cu elem
// exemplificare argumente variabile ...args

// varianta spl:
// function concatArray(source, ...args) {
//     for(const element of args) {
//         source.push(element)
//     }
//     return source
// }

function concatArray(source, ...args) {
    return source.concat(args)
}

// copiere deep
let a = [1, 2, 3]
let b = [...a]

console.log(concatArray([1, 2, 3, 4,], 5, 6, 7))