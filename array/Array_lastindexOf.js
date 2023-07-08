// 5) Array.lastindexOf()

/*
Definition and Usage:-
The lastIndexOf() method returns the last index (position) of a specified value.

The lastIndexOf() method returns -1 if the value is not found.

The lastIndexOf() starts at a specified index and searches from right to left.

By defalt the search starts at the last element and ends at the first.

Negative start values counts from the last element (but still searches from right to left).

Syntax:-
array.lastIndexOf(item, start)

*/

const fruits = ["Orange","Apple","Mango","Apple","Banana","Apple"];
console.log("Fruits 1===>",fruits.lastIndexOf('Mango'));
// expected output: 3

console.log("Fruits 2===>", fruits.lastIndexOf("Apple", 5));

console.log("Fruits 3===>", fruits.lastIndexOf("Apple", -2));

console.log("other Not Found===>", fruits.lastIndexOf("other", -2));

//example 2
const paragraph = 'The quick brown fox jumps over the New lazy lion. If the lien barked, was it really lazy?';

const searchTerm = 'lien';

console.log(`The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(searchTerm)}`);
// expected output: "The index of the first "dog" from the end is 52

//example 3

// const indices = [];
// const array = ['a', 'b', 'a', 'c', 'a', 'd'];
// const element = 'a';
// let idx = array.lastIndexOf(element);
// while (idx !== -1) {
//   indices.push(idx);
//   idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1);
// }

// console.log("indices===>",indices);
