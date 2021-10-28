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

**********************************************************************************

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

****************************************************************************

Once you have turned the string in stringSequence into an object, you can compare it with a string in dictionary to find out if the dictionary string is a subsequence.

To start, let’s write a function that checks if all the characters in a string exist as properties in the object, and returns true or false.

We are just checking if the characters exist. We can make sure they are in the right order later.

If a character in the string exists as a property in the object, no action needs to occur and the loop should simply continue to check the next character in the string.

If a property doesn't exist, then we know the string can't be a subsequence and there's no need to check other characters. The function should return false and stop executing.

If the function makes it through the whole loop without returning false, then all the letters in the string must have a matching property.

The last line of the function should return true. This line of code will only run if all the letters in the string are found.

js code for cheking the string letters exist in the object is in : compare-letters.js

**************************************************************************

In order for a string (dictionaryWord) to be a subsequence of another string (stringSequence), all of its letters must appear in the same order.

When a character from a string is found in stringSequence, the function will need to also check that it appears after the last checked character.

For example, when the 'l' in 'loan' is found in 'balloon', the next letter, 'o', must be found in 'loon' if the word is a subsequence.

Imagine you know the index where to begin searching for a character in stringSequence.

Let’s call this value its minIndex.

We can write a helper function to use in the compareLetters function.

The helper function will take minIndex and the array of indices where the current character appears in stringSequence.

When the function finds an index that is greater than or equal to minIndex, it will return that index plus 1.

If it can not find an index, it will return false.

to find the next index see find_next-index.js

***************************************************************************

The compareLetters() function didn't check if the characters were in the right order, but only if each character existed.

Let's think about how we can update the function so that it also checks the order of the characters...

First, let's change the function's name.

A function's name should reflect what it does.

As we are changing the compareLetters() function to check if a string is a subsequence, let's change the function's name to isSubsequence().

