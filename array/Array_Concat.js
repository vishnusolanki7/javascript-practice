// 3) Array.Concat()
/*
Definition and Usage:-

The concat() method concatenates (joins) two or more arrays.

The concat() method returns a new array, containing the joined arrays.

The concat() method does not change the existing arrays.

Syntax:-
array1.concat(array2, array3, ..., arrayX)

Return value:-
A new Array instance.

*/


const arr1 = ["Cecilie", "Lone"];
const arr2 = [1, 2, 3];

const arr3 = arr2.concat(arr1);
//The concat() method concatenates (joins) two or more arrays:

console.log("arr3===>",arr3);
//output arr3===> [ 1, 2, 3, 'Cecilie', 'Lone' ]


const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);

// console.log("Three Array join with using array.concat===>",numbers);
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]