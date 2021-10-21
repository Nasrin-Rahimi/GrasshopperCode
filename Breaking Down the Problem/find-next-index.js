let findNextIndex = function(indices, minIndex) {
    for(let index of indices) {
        if(index >= minIndex) {
            return index + 1;
        } else {
            return false;
        }
    }
}