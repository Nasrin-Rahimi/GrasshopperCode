Sometimes code has mistakes. These mistakes are called errors or bugs.

Some errors cause the code to run incorrectly. Others break the code completely.

The line below contains an error. The second parenthesis is missing from the function call:

console.log("Time for dinner.";

A syntax error happens when there is a missing, different, or extra character. Such as an extra comma, a missing parenthesis, or a different letter.

Logic errors happen when there is a mistake in the code that produces an unexpected result.

One way to find errors in code is to add a console.log(). This allows the values of variables to be printed while the code runs.

JavaScript includes a built-in way to catch errors before they cause the code to crash. This is called a try...catch statement.

try {
  // code to run
} catch (e) {
  // code to handle error
}

It is common practice to use e as the parameter in the catch block. It is short for error.

If any code inside the try block causes an error, the code execution will jump immediately to the catch block. The rest of the try block will not run at all.

This allows the code to handle the error.

One example of a good time to use a try...catch statement is when code from an external library is being called.

import {getIngredients} from 'cookbook';

let recipe = 'potato soup';

try {
  let ingredients = getIngredients(recipe);
  console​.log('There are ' + ingredients​.length + ' ingredients');
  ingredients​.forEach(console​.log);
} catch (e) {
  console​.log(e);
}
