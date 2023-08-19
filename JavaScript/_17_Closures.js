// A function along with it's Lexical Environment Bundled Together is called Clousure

function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    var a=100; // the output will be 100 not 7 as in the bottom line we are returning the calling of y() and here the nearest updating of a variable in it's Lexical environment is 100
    return y; // we can return functions in Javascript

    // (or)
    /*
    return function y(){
        console.log(a);
    }
    */
}
var z=x();
console.log(z);
z(); // ***This will print 7 but according to line var z=x(); the x is called and varible a should be destrpyed 
     // But here it is printing the 7 this is due to clousure even if the variable is destroyed but the function remembers it's Lexical Scope
