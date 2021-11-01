Includes method search for an item in an array. .includes() will return true or false depending on whether the item is found.

array.includes(something)

*****************************

A classic for loop has 3 parts:

A start condition that declares a variable and gives it a value.
A test that keeps the classic for loop running as long as the test is true.
An update operation that changes the variable after each iteration.

******************************

IndexOf and lastIndexOf methods, find the index of element in an array.
The lastIndexOf method is similar to indexOf, but searches in reverse from the end of an array. If no element is found, .lastIndexOf() will return -1.

*****************************

shift method removes the 1st element from an array and return it. .shift() is like .pop() except it removes the element at index 0.

unshift method to add an item to an array. .unshift() is like .push() except it adds the new items to the start of an array.

*****************************

reverse method, reverse the order of elements in an array.

*****************************

splice method, replace some items of an array with new items.
The .splice() method has 3 arguments:

1- The index to start selecting
2- The number of items to replace
3- The new items to insert

array.splice(startPoint, itemsToReplace, newItem);

*****************************

The join method combines the elements of an array into a new string.
.join() can optionally take a string as an argument, and will insert that string between each element as it joins the array.
If no argument is given, it will automatically add a comma instead. To make .join() add nothing, use an empty string '' as an argument.

*****************************

map method, call a function on each element in an array and return the results to a new array.

[1, 2, 3]​.map(num => {
  return num * 2;
})
will return the new array: [2, 4, 6].

*****************************

reduce method, add up all the values of an array. .reduce() uses an array to calculate a single value, for example the sum.

.reduce() uses 2 arguments: a callback function, and a starting value. The callback also uses 2 parameters: the total value so far, and the current value.

For example:

[1, 2, 3]​.reduce((sum, number) => {
  return sum + number;
}, 0)
will return 6, because 1 + 2 + 3 === 6.

*****************************

*****************************

*****************************


*****************************

*****************************

*****************************


*****************************
*****************************

*****************************