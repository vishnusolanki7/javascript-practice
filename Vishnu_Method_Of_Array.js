
// |||||||||||||||||||||||||||||||||||||||||||||||||||   {  Methods Of Array   }   ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


// ******************************************************>  1) Array.splice()    <****************************************************************************************

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

// ******************************************************>  2) Array.slice()     <****************************************************************************************

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

// ******************************************************>  3) Array.Concat()    <****************************************************************************************

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

 console.log("Three Array join with using array.concat===>",numbers);
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]

// ******************************************************>  4) Array.includes()  <****************************************************************************************

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


// ******************************************************>  5) Array.lastindexOf()  <****************************************************************************************

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

// ******************************************************>  6) Array.IndexOf()   <****************************************************************************************


const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
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





// ******************************************************>  7) Array.findIndex()   <****************************************************************************************

/* 
Definition and Usage:-
The findIndex() method executes a function for each array element.

The findIndex() method returns the index (position) of the first element that passes a test.

The findIndex() method returns -1 if no match is found.

The findIndex() method does not execute the function for empty array elements.

The findIndex() method does not change the original array.

Syntax:-
array.findIndex(function(currentValue, index, arr), thisValue)

Parameters:
 1) function()
    Required.
    A function to be run for each array element.
 2) currentValue	
    Required.
    The value of the current element.
 3) index	
    Optional.
    The index of the current element.
 3) arr	
    Optional.
    The array of the current element.
 4) thisValue	
    Optional. 
    Default undefined.
    A value passed to the function as its this value.

Return Value:-
    Type: A number
    The index of the first element that passes the test.
    Otherwise -1.


*/

//example 1

const array1 = [5, 12, 8, 130, 44];

function checkAge(age) {
    return age == 12;
  }

  console.log("findIndex===>",array1.findIndex(checkAge));
// expected output: 3


//example 2

const lang = ["Java", "JavaScript", "Html5"];
console.log("lang===>",lang );

// The findIndex() method returns the index of the first element of the array if the callback function passed to the findIndex method returns true, otherwise returns -1
// element found in 1st index 
console.log("JavaScript===>",lang.findIndex( (val) => val === "JavaScript" ));

// element not found so returns -1
console.log("Python===>",lang.findIndex( (val) => val === "Python" )); // -1



 
let hasJavaScript = function(currentElement, index, array){
  console.log(`currentElement = ${currentElement}`);
  console.log(`index = ${index}`);
  console.log("-------------------------");
  return array[index] === "JavaScript";
}
// element found in 1st index 
lang.findIndex( hasJavaScript ); // 1 

// ******************************************************>  8) Array.find()      <****************************************************************************************

/* 
Definition and Usage
The find() method returns the value of the first element that passes a test.

The find() method executes a function for each array element.

The find() method returns undefined if no elements are found.

The find() method does not execute the function for empty elements.

The find() method does not change the original array.

Syntax:-
array.find(function(currentValue, index, arr),thisValue)

Parameters:-
1) function()
    Required.
    A function to run for each array element.
2) currentValue
    Required.
    The value of the current element.
 
 
3) index
    Optional.
    The index of the current element.
4) arr
    Optional.
    The array of the current element.

5) thisValue	
    Optional. Default undefined.
    A value passed to the function as its this value.

 Return Value:-
 Type: A value
 => The value of the first element that pass the test.
  Otherwise it returns undefined. 
 
 */



  const array1 = [5, 12, 8, 130, 44];

  function checkAge(age) {
      return age == 12;
    }
  
    console.log("find===>",array1.find(checkAge));
  
  // expected output: 

// ******************************************************>  9) Array.filter()   <****************************************************************************************

const person = [
    {
        name:'vishnu',
        salary:20000
    },
    {
        name:'Alpes',
        salary:40000
    },
    {
        name:'Mihir',
        salary:50000
    }
]

const newPersonDetails1 = person.filter(function(element,index,arr){
    //   return {
    //       nickName:element.name,
    //       salary:element.salary+10000
    //   }
    
        return element.salary>20000
    })

console.log("newPersonDetails1===>", newPersonDetails1);

const a = [10,20,30];

console.log("join==>",a.join('===='))


// ******************************************************>  10) Array.reverse()   <****************************************************************************************

/*
Definition and Usage:-
=> The reverse() method reverses the order of the elements in an array.
=> The reverse() method overwrites the original array.

Syntax:-
array.reverse()

Return Value
The array after it has been reversed.

*/

const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// expected output: "array1:" Array ["three", "two", "one"]

// ******************************************************>  11) Array.split()    <****************************************************************************************

/*
Definition and Usage
The split() method splits a string into an array of substrings.

The split() method returns the new array.

The split() method does not change the original string.

If (" ") is used as separator, the string is split between words.

Syntax:-
string.split(separator, limit)

Parameters:-
separator:
 Optional.
   A string or regular expression to use for splitting.
   If omitted, an array with the original string is returned.
limit:	
  Optional.
  An integer that limits the number of splits.
  Items after the limit are excluded.

 Return Value
  Type: Array
  An array containing the splitted values.
*/


const myString = 'Hello World. How are you doing?'
const splits = myString.split(' ', 3)

console.log("splits 3 word===>",splits)


const words = myString.split(' ');
console.log("words 3===>",words[3]);
// expected output: "fox"

const chars = myString.split('');
console.log("chars 7===>",chars[7]);
// expected output: "k"

const strCopy = myString.split();
console.log("strCopy===>",strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]

// ******************************************************>  12) Array.join()    <****************************************************************************************

/*
Definition and Usage
=> The join() method returns an array as a string.
=> The join() method does not change the original array.
=> Any separator can be specified. The default is comma (,).

Syntax:-
array.join(separator)

Parameters:-

separator
Optional.
The separator to be used.
Default is a comma.

Return Value
Type: A string
=> The array values, separated by the specified separator.

*/




const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

    console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
console.log(elements.join(' '));

// ******************************************************>  13) Array.map()     <****************************************************************************************

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




const employee = [
    {
        name:'vishnu',
        salary:20000
    },
    {
        name:'Alpes',
        salary:40000
    },
    {
        name:'Mihir',
        salary:50000
    }
]

console.log("employee===>", employee);

const newPersonDetails = employee.map(function(element,index,arr){
  return {
      nickName:element.name,
      salary:element.salary+10000
  }

// if(element.salary>20000){
//     return element.salary

// }
})

console.log("newPersonDetails===>", newPersonDetails);

// ******************************************************>  14) Array.isArray()    <****************************************************************************************



const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = "Vishnu Solanki";
// let result =  Array.isArray(fruits);

console.log("fruits===>",Array.isArray(fruits)); //true
console.log("text===>",Array.isArray(text)); //false


// ******************************************************>  15) Array.sort()     <****************************************************************************************

/*
Definition and Usage:-
=> The sort() sorts the elements of an array.
=> The sort() overwrites the original array.
=> The sort() sorts the elements as strings in alphabetical and ascending order.

Syntax:-
array.sort(compareFunction)

Parameters:-
 compareFunction
=> Optional.
   A function that defines a sort order. The function should return a negative, zero, or positive value, depending on the arguments:
   function(a, b){return a-b}
   When sort() compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

Example:

=> The sort function will sort 40 as a value lower than 100.
=> When comparing 40 and 100, sort() calls the function(40,100).
=> The function calculates 40-100, and returns -60 (a negative value).


*/
const months = ['a', 'b', 'Feb', 'Dec'];
console.log("months",months.sort());
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort(function(a, b) {
  return a - b;
});
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]




