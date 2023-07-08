// Example 4: Users can declare the variable with the same name in different blocks using the let keyword.

let a = 10
if (true) {
  let a=9
  console.log("a===>",a) // It prints 9
}
console.log("a===>",a) // It prints 10

// Output:
// 9 
// 10