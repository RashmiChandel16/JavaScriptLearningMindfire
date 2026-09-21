/*A CSS selector is simply a pattern used to identify HTML elements. CSS uses selectors for styling, and JavaScript can use the same selector syntax to find DOM elements.
HTML element
     ↓
How do I identify it?
     ↓
CSS Selector
*/

/*document.querySelector("#user-name") ????????
document.querySelector("#user-name").length
*/

/*
website used: https://www.flipkart.com/

1. Tag Selector:
input
button
div
a

2. ID selector:
syntax: #id
for search icon: #nav-search-submit-button

3. Class selector:
syntax: .class


If there are multiple classes:
syntax: .class1.class2          (means same element has both classes)
Note: .class1 .class2           (means .class2 is inside .class1) this is combinator which we see later


4. Tag + class
Eg: div.product                 (means Find a div having class product)


5. Tag + ID
Eg: input#search


6. Group selector
Eg: input, button               (means Select all matching input AND button elements)
