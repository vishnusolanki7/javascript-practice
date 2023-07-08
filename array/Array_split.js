// 11) Array.split()
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