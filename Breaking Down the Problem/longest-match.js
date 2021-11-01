let longestMatch = function(string, dictionary) {
    let subSequence = [];
    let map = mapString(string);

    for (let element of dictionary) {
        if(isSubsequence(element, map)) {
            subSequence.push(element);
        }
    }

    return longestWord(subSequence);
}