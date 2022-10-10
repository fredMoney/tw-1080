// Check de catte ori apare un chr in str
// exemplificare for..of

// varianta non-eleganta:
// function countAppearances(s, c) {
//     count = 0
//     for(const elem of s) {
//         if(elem === c) {
//             count++
//         }
//     }
//     return count
// }

// varianta eleganta(exemplificare split(chr)):
const countAppearances = (s, c) => s.split(c).length - 1

console.log(countAppearances('a little cat', 'a'))
console.log(countAppearances('', 'a'))
console.log(countAppearances('a little cat', 'z'))