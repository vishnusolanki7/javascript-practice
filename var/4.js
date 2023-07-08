// var
// Scope of var is global or function level. Variable declared within a function has the function level scope otherwise global scope.
// Can be re-declared multiple times using var key word and same variable name.
// Value of variable declared using var can be updated anywhere within the scope.



//val is declared in global scope. So, can be accessed from anywhere
var val = 1;

function printVal() {
    console.log("val 1===>",val); // 1
    val = 2;
    console.log("val 2===>",val); // 2

    //val2 declared within function. So, scope is limited to this function only
    var val2 = 3;
    console.log("val2 1===>",val2); // 3
}

printVal();

console.log("val 2===>",val); // 2;
console.log("val2===> ",val2); // ReferenceError: val2 is not defined;