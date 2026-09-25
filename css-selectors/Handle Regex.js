/*
Regex = Regular Expression
It is a pattern used to find, match, or validate text.
(Regex tells JavaScript: “Find text that follows this pattern")

we write these patterns inside / /

1. \d -->digit -->Is there at least one digit somewhere(Any single digit from 0 to 9) --> can match 0 1 2 3 4 5 6 7 8 9  
2. \d{5} --> matches if there is 5 digits together

3. \D --> Non-digit --> is there at least one non-digit -->anything that is NOT a digit(letters, spaces, symbols, etc.)
4. \w --> Is there any word character(letters + numbers + underscore) --> A-Z, a-z, 0-9, _
5. \W --> NOT a word character --> Is there atleast one non-word-character
6. / / --> checks there is atleast onw normal space
7. \s --> checks there is atleast one whitespace(space, tab, new line)
let text = "Hello World";
let result = text.replace(/\s/g, "");
console.log(result);  //Hello World
\s → whitespace
g  → find all occurrences
"" → replace with nothing

8. /\s+/ --> one or more whitespace characters
9. \S  --> NOT whitespace
*/
console.log(/\W/.test("ABC123"));   //false
console.log(/\W/.test("ABC_123"));  //false
console.log(/\W/.test("ABC-123"));  //true
console.log(/\W/.test("ABC@123"));  //true

console.log("\\d :", /\d/.test("Hello5"));  //true
console.log("\\D :", /\D/.test("123A"));    //true

console.log("\\w :", /\w/.test("Rashmi_123"));   //true
console.log("\\W :", /\W/.test("Hello@"));   //true

console.log("\\s :", /\s/.test("Hello World"));   //true
console.log("\\S :", /\S/.test("Hello"));   //true


//Any single digit from 0 to 9
//Eg: 
let text = "My number is 9876543210";
console.log(/\d{10}/.test(text));   //true

/*
Regex	Meaning
.	Any character
\d	Digit
\D	Not digit
\w	Word character
\W	Not word character
\s	Whitespace
\S	Not whitespace
[abc]	a or b or c
[^abc]	anything except a/b/c
[a-z]	lowercase range
[A-Z]	uppercase range
[0-9]	digit range
+	1 or more
*	0 or more
?	0 or 1
{3}	exactly 3
{3,5}	3 to 5
{3,}	3 or more
^	start
$	end
|	OR
()	group/capture
(?:)	non-capturing group
\b	word boundary
i	ignore case
g	global
m	multiline

Practice these with test(), match(), and replace()
*/


let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailPattern.test("rashmi@gmail.com"));  //true
console.log(emailPattern.test("rashmi@gmail"));   //false
/*
^              → start
[^\s@]+        → one or more characters except space/@
@              → @
[^\s@]+        → one or more characters except space/@
\.             → actual dot
[^\s@]+        → domain
$              → end
*/

//i — case insensitive
let pattern = /hello/i;
console.log(pattern.test("Hello"));  //true
console.log(pattern.test("HELLO"));  //true
console.log(pattern.test("hello"));  //true

//g — global
let text = "cat dog cat";
console.log(text.match(/cat/g)); //[ 'cat', 'cat' ]
//Note:Without g:  It finds only the first occurrence.
console.log(text.match(/cat/));   //[ 'cat', index: 0, input: 'cat dog cat', groups: undefined ]

