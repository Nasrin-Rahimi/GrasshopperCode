/**
 * 
 write a function that takes a string and an abject. and check if each letter in string 
 exists as a property in object. If any letter in string can't be found in object, return false
 If all the letters exist return true.
 */

let compareLetters = function(word, object) {
    for(let letter in word) {
        if(!object[letter]) {
            return false;
        }
    }

    return true;
}