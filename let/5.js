// Example 5: If users use the let variable before the declaration, it does not initialize with undefined just like a var variable and return an error.

console.log("a===>",a);
let a = 10;

// Output:
// Uncaught ReferenceError: Cannot access 'a' before initialization