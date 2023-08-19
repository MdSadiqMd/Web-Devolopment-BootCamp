// Garbage Collector is an Internal Tool in Respective Browser Engines which Free up unused Data (Variables) 

// Limitations :
// Garbage Collector Doesn't Remove Variable if it is Present in a Function Lexical Scope and a variable pointing it from a Function
function func() {
    var a=10,z=10; // After Code Execution the "z" will be moved to garbage collector and "a" don't as it has been accessed by a function and it is present in functions Lexical scope
                   // This phenomenon of Accesing a variable and other not is called Smart Garbage Collection
    function func1(){
        console.log(a);
    }
    func1();
}
func();

