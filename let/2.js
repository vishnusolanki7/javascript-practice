// Example 2: The code returns an error because we are accessing the let variable outside the function block. The output is shown in the console.
let a = 10;
    function f() {
        if (true) {
            let b = 9
 
            // It prints 9
            console.log("b===>",b)
        }
 
        // It gives error as it
        // defined in if block
        console.log("b===>",b)
    }
    f()
 
    // It prints 10
    console.log("a===>",a)

// Output:
// 9
// ReferenceError: b is not defined