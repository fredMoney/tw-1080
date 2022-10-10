// calc frecventa relativa a unui cuvant in str

function fdist(source) {
    const results = {}
    const words = source.split(' ')
    for(element of words) {
        if (element in results) {
            results[element]++
        } else {
            results[element] = 1
        }
    }

    for(const word in results) {
        results[word] /= words.length
    }
    return results
}

console.log(fdist('the quick brown fox jumps over the lazy dog'))

// de facut acelasi lucru pt litere
