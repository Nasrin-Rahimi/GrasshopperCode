/**
 * Find the longest element from an array of string.
 */

let longestWord = function(strings) {
    let longest = '';

    for(let word of strings) {
        if(word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}