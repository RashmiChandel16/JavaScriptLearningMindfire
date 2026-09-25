/*An accessibility locator finds an element using its accessible information.
For example:

<button>Login</button>

We know:

Role = button
Name = Login

So conceptually:

Find:
Role = button
Name = Login

That's an accessibility-based way of locating the element.

*/

/* 
1. Role: what is the element
<button>	            button
<a>	                    link
<input type="text">	    textbox
checkbox	            checkbox
radio button	        radio
heading	heading         heading

2. Name: the accessible name/label tells us what the element is called.

Eg: <button>Login</button>
Role = button
Name = Login

Why do we need both?
<button>Login</button>
<button>Cancel</button>
<button>Register</button>
All three have the same role:
button
But their names are different:
button → Login
button → Cancel
button → Register
Therefore:
Role + Name --> helps us identify the exact element.
button + Login
means:
Find the button whose accessible name is Login.

What is aria-label?
Look at this:
<button>🔍</button>
What is the button?
A human might understand that 🔍 means Search.
But a screen reader may need explicit information.
So developer can write:
<button aria-label="Search">🔍</button>
Now:
Role = button
Name = Search
The important part is:
aria-label="Search"
aria-label provides an accessible name.

CSS locator
     ↓
Looks at DOM attributes/structure

Accessibility locator
     ↓
Looks at accessibility semantics
     ↓
Role + accessible name + states

Eg: <button aria-label="Submit form">Submit</button>
Here we have:
Visible text: Submit
Aria label: Submit form
So what is the accessible name?
Note:When aria-label is present and applicable, it generally takes priority over the element's visible text for its accessible name.
Visible text       → Submit
aria-label         → Submit form
Accessible name    → Submit form
Role               → button

Note:
for an icon-only button:
<button aria-label="Search">🔍</button>
aria-label is very useful because the icon itself doesn't provide a clear text name.


2. aria-labelledby
<span id="loginTitle">Login</span>
<button aria-labelledby="loginTitle">
</button>
Name: Login

3. <label>  
used for form controls
<label for="username">Username</label>
<input id="username">
accessible name: Username

4. aria-labelledby
This gets the name from another element.
<span id="searchText">Search</span>
<button aria-labelledby="searchText">
    🔍
</button>
Name: Search

Note:
aria-label
    ↓
Name is written here

aria-labelledby
    ↓
Name is written somewhere else


5. <label>
<label> is a native HTML element used mainly with form controls.
<label for="username">Username</label>
<input id="username">
Name: Username

6. aria-describedby
This one is slightly different.
It usually provides additional description, not the main name.
<label for="password">Password</label>
<input
    id="password"
    aria-describedby="passwordHelp"
>
<span id="passwordHelp">
    Password must contain at least 8 characters.
</span>
Role        → textbox
Name        → Password
Description → Password must contain at least 8 characters.
So:
aria-labelledby → NAME
aria-describedby → EXTRA INFORMATION


7. Accessible states/properties
<button
    aria-label="Next page"
    aria-disabled="true">          -->this is state/properties   --> means What is its current state?
</button>                                                            checked
                                                                     selected
                                                                     expanded
                                                                     disabled
                                                                     current

We can understand it as:
Role     → button
Name     → Next page
Disabled → true       (state/properties)


1. getByRole()
       ↓
2. Role + accessible name
       ↓
3. getByLabel()
       ↓
4. <label>
       ↓
5. aria-label
       ↓
6. aria-labelledby
       ↓
7. getByText()
       ↓
8. getByPlaceholder()
       ↓
9. getByAltText()
       ↓
10. getByTitle()
       ↓
11. getByTestId()
getByRole()
getByLabel()

Accessebility Locators:

Eg:<label for="email">Email Address</label>
<input id="email" type="email">
<button>Submit</button>
Ans: page.getByLabel('Email Address')
page.getByLabel('Email Address')
*/