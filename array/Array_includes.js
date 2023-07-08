// 4) Array.includes()
/*
Definition and Usage:-
The includes() method returns true if an array contains a specified value.

The includes() method returns false if the value is not found.

The includes() method is case sensitive.

Syntax:-
array.includes(element, start)

Parameters:-
element
=> Required.
=> The value to search for.

start
=> Optional.
=> Start position. Default is 0.

Return Value:-
type: A boolean	

Description:-
true if the value is found, otherwise false.
*/


const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false