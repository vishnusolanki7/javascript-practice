  // Example 2: The variable ‘a’ is declared inside the function. If the user tries to access it outside the function, it will display the error. Users can declare the 2 variables with the same name using the var keyword. Also, the user can reassign the value into the var variable. The output shown in the console.

    var a;
	function f() {

		// It can be accessible any
		// where within this function
		var a = 10;
		console.log("a===>",a)
	}
	f();

	// A cannot be accessible
	// outside of function
	console.log("a===>",a)