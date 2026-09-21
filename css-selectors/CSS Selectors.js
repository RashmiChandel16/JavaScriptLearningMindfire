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

1. Tag Selector:
input
button
div
a

2. ID selector:
syntax: #id
website used: https://www.amazon.com/
Element: Search bar
CSS Selector: #placeholder

3. Class selector:
syntax: .class
Element: amazon logo
CSS Selector: .nav-logo-link.nav-progressive-attribute


Note: If there are multiple classes:
syntax: .class1.class2          (means same element has both classes)
Note: .class1 .class2           (means .class2 is inside .class1) this is combinator which we see later


4. Tag + class
Syntax: tag.class                (div.product -> means Find a div having class product)
Element: Back to top button
CSS Selector: button.navFooterBackToTopText


5. Tag + ID
Sytax: tag#id
Element: All button
CSS Selector: a#nav-hamburger-menu


6. Group selector
Syntax: input, button               (means Select all matching input AND button elements (this denotes or operation))
Eg: div, #login, #signup                 (represents elements matching either selector. But be careful: if both elements exist, the locator can match multiple elements)


*/
