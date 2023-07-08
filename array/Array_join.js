// 12) Array.join()
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