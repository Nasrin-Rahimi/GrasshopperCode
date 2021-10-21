let mapString = function(string) {
    let map = {};

    for(let i = 0; i < string.length; i++) {
        let char = string[i];
        //If the char exists, the index of the current letter(char) will be pushed 
        //to the array stored in the char.
        if(map[char]) {
            map[char].push(i);
        //create the char, and set it to store an array containing the index of the 
        //current char.
        } else {
            map[char] = [i];
        }
    }

    return map;
}


let stringMap = mapString('Hello')

for(let char in stringMap) {
    console.log(char + ": " + stringMap[char]);
}