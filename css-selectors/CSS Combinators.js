//A CSS combinator tells us the relationship between two elements.
//div p  : means Find a <p> that is somewhere inside a <div>.

/*
1. Descendant(space)        -->all child at any level
div p
Select every <p> that is inside <div>, at any level

<div>
    <p>Paragraph 1</p>

    <section>
        <p>Paragraph 2</p>
    </section>
</div>

Paragraph 1
Paragraph 2

2. Child (>)       --> only direct child
div > p
Select <p> elements that are direct children of <div>

<div>
    <p>Paragraph 1</p>
    <section>
        <p>Paragraph 2</p>
    </section>
</div>

Paragraph 1

3.Adjacent Sibling (+)           -->only if p is the adjacent sibling
h2 + p
Select the <p> that comes immediately after an <h2>

<h2>Login</h2>
<p>Username</p>
<p>Password</p>

Username

4. General Sibling (~)             
h2 ~ p
Select all <p> siblings that come after <h2>

<h2>Login</h2>

<p>Username</p>
<p>Password</p>
<p>Email</p>

Username
Password
Email


Note: Two elements are siblings only when they have the same direct parent.


-->Combining Combinators:
Eg: 
<div>
    <section>
        <article>
            <p>Hello</p>
        </article>
    </section>
</div>

div > section p     (means find a section that is a direct child of div, and then find p at anylevel inside that section.)
Hello

div > section > p
Doesn't match


-->Combining Class + Combinators
Eg:
<div class="login">
    <input class="username">
    <input class="password">
    <button class="login-btn">Login</button>
</div>

.login > input       (Direct input children of .login)
username
password

.login .username     (.username anywhere inside .login.)
username

.password + .login-btn      (.login-btn immediately after .password)
Login


-->Combining ID + Combinators
Eg:
<div id="login">
    <input id="username">
    <button>Login</button>
</div>

#login > #username         (Select #username when it is a direct child of #login)


-->Combinators With Attribute Selectors
Eg:
<div class="login">
    <input type="text" name="username">
    <input type="password" name="password">
</div>

.login > input[type="text"]        (Find an input that has type="text" and is a direct child of .login)

input[type="text"] + input[type="password"]       (Find the password input immediately following the text input)




Practical Examples:
Website used: https://www.flipkart.com/
Element: Contact Us
CSS combinator: .x3q9HG [aria-label="Contact Us"]

Element: Login 
CSS combinator: .wszdrO>[title="Login"]

Element: Contact Us
CSS combinator: .ykJuJZ+[aria-label="Contact Us"]

Element: About Us
CSS combinator: .ykJuJZ~[aria-label="About Us"]

*/