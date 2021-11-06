HTML uses tags to create and structure HTML elements.

The <html> tag marks the start and end of an HTML document.

Nested inside the <html> tag is the <body> tag. It contains the body of the page.

An element is indented if it's nested inside another element.

*********************************

CSS is comprised of rulesets that define how HTML elements appear.

Each ruleset consists of a selector and 1 or more rules.

For example:

h1 {
  color: red;
}
h1 is the selector, and color: red; is the rule. In this example all h1 elements will be set to red.

*********************************
The id attribute assigns an id to a specific element. An id can only be used once.

The element can then be selected in CSS by using the # symbol followed by the id.

For example:

#bio {
    color: blue;
}
This selects the element with the id 'bio' and sets its color to blue.
*********************************
The document.getElementById method takes an id, and returns the element with the matching id.

The element's .textContent property can then be accessed and its text changed.

document.getElementById('post').textContent = 'My First Project';

*********************************
HTML establishes the structure of the webpage. It creates elements.

CSS controls the presentation of the webpage. It styles elements.

JavaScript adds interactivity to the webpage. It modifies elements.

*********************************
button {
    border-radius: 10px; => give all buttons, rounded corner
}
*********************************
An event listener runs a callback function when a specific event occurs.
*********************************
If more than 1 ruleset is selecting the same element, then the more specific selector is applied.

For example, in the following CSS:

h2 {
    color: red;
}

#bio {
    color: blue;
}
An h2 element with the id 'bio' will be blue, even though another selector sets all h2 elements to red.


*********************************
The createElement method takes a tag name (as a string) and creates a new HTML element by returning a start and end tag for it.

let newSubHeading = document.createElement('h2');
newSubHeading.textContent = 'A new heading';

For example, document.createElement('h2') returns <h2></h2>, or a new heading element.

While the method creates a new element, it doesn't add it to a webpage.
*********************************
The appendChild method adds an HTML element as a "child" of another element.

let paragraph = document​.createElement('p');
document​.body​.appendChild(paragraph);
This would add a new paragraph element as a child of <body>. For example:

<body>
    <p></p>
</body>

*********************************

*********************************

*********************************

*********************************

