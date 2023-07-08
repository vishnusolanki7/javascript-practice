// Example 3: Users cannot re-declare the variable defined with the let keyword but can update it.

let a = 10
 
// It is not allowed
let a = 10

// It is allowed
a = 10

// Output:

// Uncaught SyntaxError: Identifier 'a' has already been declared
