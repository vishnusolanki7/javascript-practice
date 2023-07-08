// const
// Scope of const is same as let, block level. Here block is confined to the curly braces ({ and }).
// Variables declared within curly braces can not be accessed from outside the respective scopes.
// Can not be re-declared multiple times using const keyword and same variable name.
// Value can not be updated once value is assigned to a const. But properties can be updated.

const val = 1;

const obj = {
    x: 5,
    y: 10
}

function printVal() {
    console.log("val===>",val); // 1;

    const val2 = 2;
    console.log("val2===>",val2); // 2;
}

printVal();

val = 3; //TypeError: Assignment to constant variable.
const val = 3; //SyntaxError: Identifier 'val' has already been declared

const obj = { x: 10, y: 15 }; //SyntaxError: Identifier 'obj' has already been declared
obj = { x: 10, y: 15 }; //TypeError: Assignment to constant variable.
obj.x = 10;
obj.y = 10;
console.log("obj===>",obj); //{ x: 10, y: 10 }