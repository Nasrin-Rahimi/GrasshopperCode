let isSubsequence = function(word, map) {
    let minIndex = 0;
    for(let letter in word){
        if(map[letter]) {
            minIndex = findNextIndex(map[letter], minIndex);
            if(minIndex === false) {
                return false;
            }
        } else {
            return false;
        }
    }
    return truel
}