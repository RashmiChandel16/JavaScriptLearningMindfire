/*
STATIC SELECTOR
       ↓
#username

DYNAMIC SELECTOR
       ↓
let id = "username"
       ↓
`#${id}`
       ↓
#username

And when id changes, the selector changes automatically.
*/

/*
<input id="username">
<input id="password">
<input id="email">
let idValue = "username";
let selector = `#${idValue}`;
console.log(selector);     //here the selector is dynamic.

Attribute value dynamically:
<input type="text">
<input type="password">
<input type="email">
let typeValue = "password";
let selector = `input[type="${typeValue}"]`;
console.log(selector);

In playright:
let id = "username";
let selector = `#${id}`;
await page.locator(selector).fill("Rashmi");

Eg:
<input id="username">
<input id="password">

You want to write reusable code->

async function fillField(id, value) {

    let selector = `#${id}`;

    await page.locator(selector).fill(value);
}
await fillField("username", "Rashmi");
await fillField("password", "abc123");
So you don't have to write separate code for every field.

