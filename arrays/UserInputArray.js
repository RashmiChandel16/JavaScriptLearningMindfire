const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter numbers separated by comma: ", function(input) {

    let arr = input.split(",").map(Number);

    console.log("Array:", arr);

    rl.close();
});