### Array splice 

```typescript
// array_slice.js
// Definition and Usage
// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.


const fruits = ["Banana", "Orange", "Mango", "Kiwi", "First"];
fruits.splice(2, 0, 'Apple');

// inserts at index 1
console.log(fruits);
// expected output: Array [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi', 'First' ]

fruits.splice(5, 1, 'Last');
// replaces 1 element at index 4 
// Remove 0 (zero) elements before index 4, and insert "drum"

console.log(fruits);
// expected output: Array [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi', 'Last' ]

fruits.splice(4, 2);
// At position 4, remove 2 items: 

console.log(fruits);
// expected output: Array [ 'Banana', 'Orange', 'Apple', 'Mango' ]

```
