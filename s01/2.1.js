function strDifference(me, other) {
    if(me.length !== other.length) {
        return -1
    }
    let diffs = 0
    for(let i = 0; i < me.length; i++) {
        if(me[i] !== other[i]) {
            diffs++
        }
    }
    return diffs
}

console.log(strDifference('a', 'ab'))
console.log(strDifference('ab', 'ac'))
console.log(strDifference('ab', 'ab'))
