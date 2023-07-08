
// example 1
console.log('Example 1');
let n1 = 5;
let string1 = "";
// External loop
for (let i = 1; i <= n1; i++) {
  // printing spaces
  for (let j = 1; j <= n1 - i; j++) {
    string1 += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    string1 += "*";
  }
  string1 += "\n";
}
console.log(string1);

//example 2
console.log('Example 2');
let rows2 = 5;

// pattern variable carries the final pattern in string format
let pattern2 = "";

// outer loop runs for `rows` no. of times
for (let n2 = 1; n2 <= rows2; n2++) {
   // Inner Loop - I -> for the spaces
   for (let space = 1; space <= rows2 - n2; space++) {
      pattern2 += " ";
   }

   // Inner Loop - II -> for the numbers
   for (let num = 1; num <= 2 * n2 - 1; num++) {
      pattern2 += n2;
   }

   pattern2 += "\n";
}
console.log(pattern2);




// example 3
console.log('Example 3');
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

// example 4
console.log('Example 4');
let n4 = 6;
let string4 = "";
for (let i = 1; i <= n4; i++) {
  // printing spaces
  for (let j =0; j < n4 - i; j++) {
    string4 += " ";
  }
  // printing num
  for (let k =1; k < i; k++) {
    string4 += k;
  }
  string4 += "\n";
}
console.log(string4);


// example 5
console.log('Example 5');
let n5 = 5;
let string5 = "";
// External loop
for (let i = 0; i < n5; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    string5 += " ";
  }
  // printing star
  for (let k = 0; k < 2 * (n-i) - 1; k++) {
    string5 += "*";
  }
  string5 += "\n";
}
console.log(string5);

// example 6
console.log('Example 6');

let n6 = 6;
let string6 = "";
// External loop
for (let i = 1; i < n6; i++) {
  // printing spaces
  for (let j = 1; j < i; j++) {
    string6 += " ";
  }
  // printing star
  for (let k = 0; k < 2 * (n6-i)-1 ; k++) {
    string6 +=i;
  }
  string6 += "\n";
}
console.log(string6);


// example 7
console.log('Example 7');

let rows7 = 5;

// pattern variable carries the final pattern in string format
let pattern = "";

// outer loop runs for `rows` no. of times
for (let n7 = 0; n7 <= rows7; n7++) {

    // printing spaces
  for (let j = 1; j <= rows7; j++) {
    pattern += " ";
  }

   // inner loop runs for n
   for (let num = 1; num <= n7; num++) {
      pattern += num;
   }

   // Add a new line character after contents of each line
   pattern +="\n";
}
console.log(pattern);

// example 8
console.log('Example 8');

let rows8 = 5;

// pattern variable carries the final pattern in string format
let pattern8 = "";

// outer loop runs for `rows` no. of times
for (let n8 = 0; n8 <= rows8; n8++) {

    // printing spaces
  for (let j = 1; j <= rows8; j++) {
    pattern8 += " ";
  }

   // inner loop runs for n
   for (let num = 1; num <= n8; num++) {
      pattern8 += n8;
   }

   // Add a new line character after contents of each line
   pattern8 +="\n";
}
console.log(pattern8);

//example 9
console.log("exanple 9");    

let rows9 = 5;

// pattern variable carries the final pattern in string format
let pattern9 = "";

// outer loop runs for `rows` no. of times
for (let n9 = 1; n9 <= rows9; n9++) {

       // printing spaces
  for (let j = 1; j <= rows9; j++) {
    pattern9 += " ";
  }

    for (let num9 = 1; num9 <= 6 - n9; num9++) {
       pattern9 += n9;
    }
    pattern9 += "\n";
 }
 console.log(pattern9);

//example 10    
console.log("exanple 10");  
let rows10 = 5;

// pattern variable carries the final pattern in string format
let pattern10 = "";

// outer loop runs for `rows` no. of times
for (let n10 = 1; n10 <= rows10; n10++) {

       // printing spaces
    for (let j = 1; j <= rows10; j++) {
        pattern10 += " ";
    }
    for (let num10 = 1; num10 <= 6 - n10; num10++) {
       pattern10 += num10;
    }
    pattern10 += "\n";
 }
 console.log(pattern10);