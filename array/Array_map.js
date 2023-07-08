// 13) Array.map()
/*
Definition and Usage
=> map() creates a new array from calling a function for every array element.
=> map() calls a function once for each element in an array.
=> map() does not execute the function for empty elements.
=> map() does not change the original array.

Syntax:
array.map(function(currentValue, index, arr), thisValue)

Parameters:
1) function()
    Required.
    A function to be run for each array element.
2) currentValue	
    Required.
    The value of the current element.
3) index	
    Optional.
    The index of the current elemen
4) arr	
    Optional.
    The array of the current element.
5) thisValue	
    Optional.
    Default value undefined.
    A value passed to the function to be used as its this value.

Return Value:
Type: An array
=> The results of a function for each array element.

*/

//example 1

const array1 = [1, 4, 9, 16];

console.log("Array first",array1); //Array first [ 1, 4, 9, 16 ]
// pass a function to map
const array2 = array1.map(x => x * 2);

console.log("x*2 ===>",array2); //x*2 ===> [ 2, 8, 18, 32 ]
// expected output: Array [2, 8, 18, 32]


//example 2

const newArr = array1.map(myFunction);

function myFunction(num) {
    return num * 10;
  
  }

console.log("num*10 ===>", newArr); //num*10 ===> [ 10, 40, 90, 160 ]
 
