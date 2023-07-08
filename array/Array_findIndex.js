// 7) Array.findIndex()

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


const array1 = [5, 12, 8, 130, 44];

function checkAge(age) {
    return age == 12;
  }

  console.log("findIndex===>",array1.findIndex(checkAge));
// expected output: 3


// const lang = ["Java", "JavaScript", "Html5"];
// console.log("lang===>",lang );

// The findIndex() method returns the index of the first element of the array if the callback function passed to the findIndex method returns true, otherwise returns -1
// element found in 1st index 
// console.log("JavaScript===>",lang.findIndex( (val) => val === "JavaScript" ));

// element not found so returns -1
// console.log("Python===>",lang.findIndex( (val) => val === "Python" )); // -1



 
// let hasJavaScript = function(currentElement, index, array){
//   console.log(`currentElement = ${currentElement}`);
//   console.log(`index = ${index}`);
//   console.log("-------------------------");
//   return array[index] === "JavaScript";
// }
// element found in 1st index 
// lang.findIndex( hasJavaScript ); // 1 






