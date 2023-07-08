// In JavaScript, users can declare a variable using 3 keywords that are var, let, and const. In this article, we will see the differences between the var, let, and const keywords. We will discuss the scope and other required concepts about each keyword.

    // var keyword in JavaScript: The var is the oldest keyword to declare a variable in JavaScript. 
    
    // Scope: Global scoped or function scoped. The scope of the var keyword is the global or function scope. It means variables defined outside the function can be accessed globally, and variables defined inside a particular function can be accessed within the function. 
    
    // Example 1: Variable ‘a’ is declared globally. So, the scope of the variable ‘a’ is global, and it can be accessible everywhere in the program. The output shown is in the console.
    
    
    
    var a = 10
		function f(){
			console.log("a===>",a)
		}
	f();
	console.log("a===>",a)
