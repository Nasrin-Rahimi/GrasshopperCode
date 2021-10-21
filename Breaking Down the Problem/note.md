A string can be a subsequence of another string if all of its characters appear and are in the same order.

For example, 'hello' is a subsequence of 'help love everyone' because 'h', 'e', 'l', 'l', and 'o' appear in the second string in the same order as 'hello'.

'abe' is not a subsequence of 'bale', because the 'a', 'b', and 'e' are not in the same order.

'bus' is a subsequence of 'abacus' because the 'b', 'u', and 's' all appear in the same order in 'abacus'.

Imagine you are given a dictionary of words and a string, such as 'supercalifragilisticexpialidocious'.

Could you write an algorithm to find the longest word in the dictionary that is a subsequence of the string?

The Challenge:

Write a function that takes a string (stringSequence) and an array of strings (dictionary).

The function should return the longest string in dictionary that is a subsequence of stringSequence.

For example:

let stringSequence = 'abppplee';
let dictionary = ['able', 'ale', 'apple', 'bale', 'kangaroo'];
The correct output would be 'apple', as that is the longest subsequence of 'abppplee'.

'able' and 'ale' are both subsequences, but they are shorter than 'apple'.

'bale' is not a subsequence, because while all its letters are found in 'abppplee', they are in the wrong order.

'kangaroo' is the longest string in dictionary, but it is not a subsequence of 'abppplee'.

Let's start by tackling how to find the longest word. We can figure out how to find the subsequences after.

Imagine you already have an array of strings that are subsequences of stringSequence. How would you write a function to find the longest string in the array?

First, think about what inputs, or parameters, the function needs to take.

The input of fuction should be an array of string and the function should return the longest string. (js code is in: longest-subsequence-array-of-string.js)

To check if a word in the array (dictionary) is a subsequence of the string (stringSequence), it is important to know what characters are in stringSequence and where they appear.

To do this, we can turn the string into an object.

Each character in the string will become a property, with the indices where they appear stored in an array.

This object can be used like a map, as it shows where the string's characters are located.

For example, an object made from the string 'balloon' would look like:

{ b: [0], a: [1], l: [2, 3], o: [4, 5], n: [6] };

This shows that 'balloon' contains the characters 'b', 'a', 'l', 'o', and 'n', and lists the indices where each character is located.

An array is used to store the index positions, because a character can appear more than once.

Why make a map? Why not just loop through stringSequence and compare its letters with each word in dictionary?

Making a map stops us from having to loop through stringSequence over and over again for each word in dictionary.

By making a map, we can just loop through stringSequence once, which makes the function faster and more efficient.

js code for converting string to object is in : stirng-to-object.js