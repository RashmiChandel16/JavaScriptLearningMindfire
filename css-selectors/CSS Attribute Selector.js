/*
Attribute gives additional information about an HTML element.
Attribute selectors can match an attribute's existence, exact value, or parts of its value.
tagname[attribute='value']
tagname[attribute]
[attribute='value']
tagname:not([attribute='value'])

Attribute selector + class------>input.form_input[type="text"]
Attribute selector + ID--------->input#user-name[type="text"]

for multiple attributes-->
tagname[attribute='value'][attribute='value']
or input#twotabsearchtextbox[placeholder^='Search']

1. [type]	        attribute exists     Find every element that has a type attribute.
2. [type="text"]	exact value
3. [id^="user"]	    starts with
4. [id$="name"]	    ends with
5. [id*="user"]	    contains
6. [attr~="value"]  whole whitespace-separated word    Eg: <div class="card product active">     [class~="product"]
                                                       If <div class="product-card">             then [class~="product"] will not work
*/

/*
website: https://www.flipkart.com/
1. [autocomplete]   giving 2 elemnets unable to identify 2nd element???

2. Element: facebook icon
   CSS attribute selector: img[alt="Facebook"]

3. Element: Select delivery location
   CSS attribute selector: [style ^= "color:#1254E7"]

4. Element: Refresh Page option
   CSS attribute selector: [class $= "p r-88pszg"]
   multiple classes ke case me??????

5. Element: Contact Us link
    CSS attribute selector: [aria-label *= "Contact"]
   

href and link related are also attributes??

*/

//user input using string literal