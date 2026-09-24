//Basic Selectors → Attribute Selectors → Combinators → Pseudo-classes → Pseudo-elements → Pagination

//p:nth-child(2) It should be 2nd child and that should be <p>
//But first-of-type counts only same tag/type

/*A pseudo-class is a keyword added to a CSS selector to select an element based on its state, position, or condition
A pseudo-class is used to select an element based on its state, position, or specific condition.
selector:pseudo-class
li:nth-child(3)     (Here li is element and nth-child(3) is pseudo class)

Why do we need Pseudo-classes?
Sometimes normal selectors aren't enough.
<ul>
    <li>Apple</li>
    <li>Banana</li>
    <li>Mango</li>
    <li>Orange</li>
</ul>
If there are no classes or IDs, how would you select Mango?
In this case you can use:
li:nth-child(3)    ==>select the 3rd child whose tag is li
li:nth-of-type(3)  ==>select the 3rd li child

A. Position-based
:first-child
:last-child
:nth-child()
:first-of-type
:last-of-type
:nth-of-type()
B. State-based
:hover
:focus
:active
:checked
:disabled
:enabled
C. Logic / condition
:not()
:is()
:has()

1. :first-child
Wesite used: https://www.flipkart.com/
Element: For You
CSS selector: .css-g5y9jx.r-18u37iz[style="padding-right: 16px;"]>div:first-child

2. :last-child
Element: Grocery
CSS selector: .css-g5y9jx[style="flex-direction:row;flex-wrap:wrap;flex:1;gap:16px"]>div:last-child

3. :nth-child()
Element: Minutes
CSS selector: .css-g5y9jx[style="flex-direction:row;flex-wrap:wrap;flex:1;gap:16px"]>div:nth-child(2)

4. :first-of-type
Element: Contact Us
CSS selector: .x3q9HG>div:first-of-type>a:first-of-type

5. :last-of-type
Element: Corporate Information
CSS selector: .x3q9HG>div:first-of-type>a:last-of-type

6. :nth-of-type
Element: Flipkart Stories
CSS selector: .x3q9HG>div:first-of-type>a:nth-of-type(4)

*/






