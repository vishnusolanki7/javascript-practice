// let keyword in JavaScript: The let keyword is an improved version of the var keyword. 

// Scope: block scoped: The scope of a let variable is only block scoped. It can’t be accessible outside the particular block ({block}). Let’s see the below example.

// Example 1: The output is shown in the console.

let a = 10;
function f() {
    let b = 9
    console.log("b===>",b);
    console.log("a===>",a);
}
f();
