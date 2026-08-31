//largest number
let a = 20;
let b = 20;
let c = 10;
if (a === b && b === c) {
    console.log("All are equal");
} else if (a >= b && a >= c) {
    console.log("a is largest");
} else if (b >= a && b >= c) {
    console.log("b is largest");
} else {
    console.log("c is largest");
}

//pattern printing- simple * print
let count = 0;
for(let i = 1; i<=5; i++){
    for(let j=1; j<=5; j++){
        console.log("*");
        count++;
    }
}
console.log(count); //to check * kitni bar print hua


/* left angle triangle program:
*       ← row 1
**      ← row 2
***     ← row 3
****    ← row 4
*****   ← row 5
*/
for(let i = 1; i<=5; i++){
   let row = "";
   for(let j=1; j<=i; j++)
   {
    row = row + "*";
   }
   console.log(row);
}

///*right triangle program:
for(let i=1; i<=5; i++){
    let row = "";
    for(let j=1; j<=5-i; j++){
        row=row+" ";
    }
    for(let k=1; k<=i; k++){
        row=row+"*";
    }
    console.log(row);
}

/* ulta pattern:
*****
****
***
**
*
i= 5 rows
i=1, j=5 bar
i=2, j=4
*/
for(let i=1; i<=5; i++){
    let row = "";
    for(let j=1; j<=6-i; j++){
        row=row+"*";
    }
    console.log(row);
}

/*Pyramid:
    *
   ***
  *****
 *******
*********
i=5 rows
i=1, j=4 space , k=1 star
i=2, j=3space, k=3star
i=3, j=2space, k=5star
i=1, j=5-i, k=i*2-1
*/
for(let i=1; i<=5; i++){
   let row = "";
   for(let j=1; j<=5-i; j++){
    row = row+" ";
   }
   for(let k=1; k<=2*i-1; k++){
    row=row+"*";
   }
   console.log(row);
}

/*hollow pattern:
*****
*   *
*   *
*   *
*****
i=1 se i<=n tk here n =5 bcz 5rows print krani h
jb i=1 ya i=5 ya j=1 ya j=5 tb start print kre ni to space
*/
for(let i=1; i<=5; i++){
    let row = "";
    for(j=1; j<=5; j++){
        if(i===1 || i===5 || j===1 || j===5){
            row=row+"*";
        }
        else{
            row=row+" ";
        }
    }
    console.log(row);
}


/* Pattern program:
1
12
123
1234
12345
n=5 bcz row 5h
ab i jo outer loop k liye h 
j inner loop ke liye, when i=1 ek bar chle means j<=i
                      when i=2 2 bar chle means 
*/
for(let i=1; i<=5; i++){
    let row = "";
    for(let j=1; j<=i; j++){
        row=row+j;
    }
console.log(row);
}


/* same number pattern
1
22
333
4444
55555
*/
for(let i=1; i<=5; i++){
    let row="";
    for(let j=1; j<=i; j++){
        row = row+i;
    }
    console.log(row);
}


/*
   *
  ***
 *****
*******
3space 2space 1space 0space
1star 3star 5star 7star
*/
for(let i=1; i<=4; i++){
    let row = "";
    for(let j=1; j<=4-i; j++){
        row=row+" ";
    }
    for(let k=1; k<=2*i-1; k++){
        row=row+"*";
    }
    console.log(row);
}


/* Inverted pyramid
*********
 *******
  *****
   ***
    *
i=1->0space 9star
i=2->1space 7star
i=3->2space 5star
i=4->3space 3star
i=5->4space 1star
     i-1
*/
for(let i=1; i<=5; i++){

}

/*
*
**
* *
*  *
*****
n=5, bcz row=5
jha j====1 ya j===i ya i===n
*/
for(let i=1; i<=5; i++){
    let row = "";
    for(j=1; j<=i; j++){
        if(j===1 || j===i || i===5){
            row = row+"*"
        }
        else{
            row=row+" ";
        }
    }
    console.log(row);
}






