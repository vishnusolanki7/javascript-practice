// 6) Array.IndexOf()


const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
// console.log(beasts.indexOf('bison', 2));
// expected output: 4

// console.log(beasts.indexOf('giraffe'));
// expected output: -1

//example 2

/* 
=> The indexOf return the very first index where the element matched.
=> On the other hand lastIndexOf returns the last index where the element matched.
*/



const anyString = ['ant', 'bison', 'camel', 'duck', 'camel', 'mini'];

console.log("a===>", anyString.indexOf('camel'));     // result = 2
//left to right check

console.log("b===>", anyString.lastIndexOf('camel'));  //result = 4
//right to left check

