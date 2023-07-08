// 2) Array.slice()
/*
Definition and Usage:-
=> The slice() method returns selected elements in an array, as a new array.
=> The slice() method selects from a given start, up to a (not inclusive) given end.
=> The slice() method does not change the original array.

Syntax:-
array.slice(start, end)

Parameters:-
=> start
Start position. Default is 0.
Negative numbers select from the end of the array.

=> end
End position. Default is last element.
Negative numbers select from the end of the array.

Return Value:-
A new array containing the selected elements.

*/

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log("Animals===>",animals);
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

console.log("start 2 Position===>",animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log("start 2 Position to end 4 position===>",animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log("start 1 Position to end 5 position===>",animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log("reverse end -2 position to start postion===>",animals.slice(-2));
// left to right.
// expected output: Array ["duck", "elephant"]

console.log(" start 2 postion to reverse end -1 position ===>",animals.slice(2, -1));
// left to right.
// expected output: Array ["camel", "duck"]

console.log("Animals slice===>",animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
