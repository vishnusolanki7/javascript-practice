// Example : Users can declare the variable with the same name in different blocks using the var keyword.

// var a = 10
if (true) {
  var a=9
  console.log("a 1===>",a) // It prints 9
}
console.log("a 2===>",a) // It prints 9




function foo() {
  let x = 1;
  console.log("x 1===>",x);
}
 
foo();
console.log("X 2===>",x);
 