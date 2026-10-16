/*class Test{
    constructor(){
        console.log("hello test");
    }
}
let obj = new Test();

let pattern = \^[A-Z]\d{2}$\
*/
/*Write a JS function getFormattedPriceList(prices) 
that takes an array of price strings like [" $10.50 ", " $20.00 ", " $5.25 "], strips spaces and $ 
signs, converts them to numbers, and returns only prices greater than 10.00.
*/

let prices = [" $10.50 ", " $20.00 ", " $5.25 "];
function getFormattedPriceList(prices){
    return prices 
    .map(price => Number(price.trim().replace("$", "")))
    .filter(price => price>10.00);
}
console.log(getFormattedPriceList(prices));



//Write JS code to return an array containing only the names of failed tests that took more than 1000ms.

const testResults = [
  { testName: "Login", status: "PASSED", durationMs: 1200 },
  { testName: "Checkout", status: "FAILED", durationMs: 4500 },
  { testName: "Search", status: "FAILED", durationMs: 800 },
  { testName: "Payment", status: "PASSED", durationMs: 3100 }
];

let arr = [];

for (let i = 0; i < testResults.length; i++) {
    if (
        testResults[i].status === "FAILED" &&
        testResults[i].durationMs > 1000
    ) {
        arr.push(testResults[i].testName);
    }
}

console.log(arr);
    


