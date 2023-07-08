
// There are three keywords in JavaScript that can be used to declare variables: let, var, and const.
 
//https://blog.devgenius.io/understand-the-difference-between-var-let-and-const-in-javascript-fdf19e18efd0

//https://tecadmin.net/what-is-var-let-and-const-in-javascript/

// https://www.educative.io/answers/difference-between-var-let-and-const-keyword-in-javascript


// 1. var
// var: The var keyword declares a function-scoped or global variable, optionally initializing it to a value.
// Function-scoped means that the variable is only available within the function it was declared in. Global variables are available throughout your entire code.

console.log("welcome");

var a = 10;


console.log("a first===>", a);

a =20;

console.log("a second===>",a);

var a = 30;

console.log("a third===>", a);

var b ;

console.log("b===>", b);

if(a>10){
    a = 50;
}

console.log("a fourth===>", a);

// ***********************************************************************************
// 2. let
// let: The let keyword declares a block-scoped local variable, optionally initializing it to a value.
// Block-scoped means that the variable is only available within the block it was declared in, which is usually denoted by curly braces {}

let c = 10;

console.log("c first===>", c);


c = 20;

console.log("c second===>", c);

// let c = 30; // can not redeclare let variable

console.log("c third===>",c);

if(c<30){

    c = 50;
    }

    function myFun(){
        c = 60;
    }
    console.log("c fifth===>", c)
    myFun();

console.log("c fourth===>", c);


// 3. const
// const: The const keyword declares a block-scoped, immutable constant variable, i.e. a variable that can’t be reassigned.
// Constants are also called “immutable variables”, but that’s a bit of a misnomer since they are actually variables – just ones that can’t be reassigned.


const  d = 10;

console.log("d first===>", d);

// d = 20; not possible in const
console.log(" d second===>", d);

// const d = 20; can not redeclare const variable

console.log(" d third===>", d);

