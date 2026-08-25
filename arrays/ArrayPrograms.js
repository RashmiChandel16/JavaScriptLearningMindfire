//Access all elements of a nested array.
let nestedArr = [ [1, 2], [3,4]];
for(let row of nestedArr){
    for(let value of row){
        console.log(value);
    }
}

//find second largest number in array: