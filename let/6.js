// let
// Scope of let is block level. Here block is confined to the curly braces ({ and } like function, if or for blocks etc.).
// Variables declared within curly braces can not be accessed from outside the respective scopes.
// Can not be re-declared multiple times using let keyword and same variable name.
// Value of variables declared using let can also be updated anywhere within the scope.


let val = 1;

function printVal() {
    console.log("val 1===>",val); // 1
    val = 2;
    console.log("val 2===>",val); // 2

    let val2 = 3;
    console.log("val2 1===>",val2); // 3

    if (1 == 1) {
        console.log("val2 1===>",val2); // 3
        let val3 = 4;
        console.log("val3 1===>",val3); // 4
    }
    console.log("val3 1===>",val3) //ReferenceError: val3 is not defined
}

printVal();

console.log("val===>",val); // 2
console.log("val2===>",val2); // ReferenceError: val2 is not defined

let val = 5; // SyntaxError: Identifier 'val' has already been declared