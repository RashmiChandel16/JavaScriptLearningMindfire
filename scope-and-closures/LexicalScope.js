/* Think where is the function written??
Lexical scope is the scope determined by where variables and functions are physically written in the code.
It determines what outer variables are accessible.
Lexical structure: Global
                     ↓
                   outer
                     ↓
                   inner  :1st it will search in inner scope then outer scope then global scope*/

let a = 20;
function outer(){
    let b = 20;
    function inner(){
        let c = 30;
        console.log(a);
        console.log(b);
        console.log(c);
    }
    inner();
}
outer();


