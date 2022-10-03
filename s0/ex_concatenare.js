function concatenare(s1, s2, s3) {
    console.log(`${s1}${s2}${s3}`)
}

concatenare('ce ', 'zici ', 'frate')

// v rezolvare prof/colega v
const makePhrase = (s1, s2, s3) => {
    return s1 + s2 + s3
}

const makePhraseGeneral = (words) => {
    let phrase = ''
    for (const word of words) {
        phrase += ' ' + word
    }
    return phrase
}