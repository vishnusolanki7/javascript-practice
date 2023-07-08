// Example 2: Users cannot change the properties of the const object, but they can change the value of properties of the const object.

const a = {
    prop1: 10,
    prop2: 9
}
 
// It is allowed
a.prop1 = 3

console.log("a.prop1===>",a.prop1);

// It is not allowed
a = {
    b: 10,
    prop2: 9
}


// Output:
// 3
// Uncaught SyntaxError:Unexpected identifier