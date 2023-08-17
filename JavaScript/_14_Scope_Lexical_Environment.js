// Whenever Execution Context is Created Lexical Environment is also Created
// Lexical Environment is the Local Memory Along with Lexical Environment of it's Parent
// Lexical Means Heirarchy

// Scope means the area where the Variable is accesible
// Now we print b in c() as it is not present in c scope it checks it's lexical environment as b is present in a() so it's prints in console 
// If it Not present in a() also it will check the global scope and return value if present or returns error

function a(){ // a is lexically inside Global Scope
    var b=10;
    c();
    function c(){ // c is lexically inside a
        console.log(b);
    }
}
a();