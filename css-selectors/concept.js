/*Understand what we're actually doing->

Before CSS selectors, understand this basic idea.

A website is basically HTML elements arranged in a tree.

For example:

<div>
    <input id="username">
    <input id="password">
    <button>Login</button>
</div>

Think of it like:

div
│
├── input
│     id = username
│
├── input
│     id = password
│
└── button
      Login

When automation says:

"Find the username field"

the browser needs some way to identify it.

That's where a locator/selector comes in.



CSS uses that pattern for styling:

#login {
    background: red;
}

JavaScript can use the same pattern to find the element:

document.querySelector("#login");



Think of it like an address

Imagine this HTML:

<button id="login">Login</button>

The button has an address/name:

#login

CSS says:

"Find #login and make it red."

JavaScript says:

"Find #login because I want to work with it."

Playwright says:

"Find #login because I want to click it."

So the selector is the way of identifying the element.


             #login
                ↓
        identifies the button
          ↙       ↓       ↘
        CSS      JavaScript   Playwright
         ↓          ↓            ↓
      style it    find it       click it


CSS selector = a pattern used to identify/select HTML elements.


For your automation learning, this is why CSS selectors are important. When you write:

page.locator("#login")

#login is a CSS selector, and Playwright uses it to locate the HTML element.



<h1>Welcome</h1>
<p>Hello Rashmi</p>
<button>Login</button>


<input>
Used for entering data.
For example:
<input type="text">
<input type="password">
<input type="email">


Link
<a href="https://example.com">Google</a>
a = anchor/link.
The href tells the browser where the link goes.


The href tells the browser where the link goes.

Image
<img src="dog.jpg" alt="Dog">
img = image.


Division/Container
<div>
    <h2>Login</h2>
    <input>
    <button>Login</button>
</div>
div is basically a container/group.



Attributes:
<button id="loginButton">Login</button>
here id is attribute
<input class="username">
here class is attribute
<input type="email">
here type is attribute     Note: for this we can write css selectr like:   input[type="email"]



Eg: <button id="login" class="primary">Login</button>
button
#login
.primary
button#login
button.primary
All of these can identify the button, but they have different meanings and levels of specificity.