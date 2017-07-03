var a,b;
b=typeof a; 
console.log("var a; => ",b);		// "undefined"

a = "hello world";
b=typeof a;
console.log("a = 'hello world'; => ",b);	// "string"

a = 42;
b=typeof a; 
console.log("a = 42; => ",b);			// "number"

a = true;
b=typeof a; 
console.log("a = true; => ",b);		// "boolean"

a = null;
b=typeof a; 
console.log("a = null; => ",b);		// "object" -- weird, bug

a = undefined;
b=typeof a; 
console.log("a = undefined; => ",b);		// "undefined"

a = { b: "c" };
b=typeof a; 
console.log("a = {b: 'c'}; => ",b);		// "object"
