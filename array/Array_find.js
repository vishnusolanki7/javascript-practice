// 8) Array.find()
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