//In javascript we can change the type of variable in runtime
//var is globally scoped
//const and let are block scoped 
function test() {
    var a = "3";
    var b = "8";
    var c = a;
    a = b;
    b = c;
    console.log("a is " + a);
    console.log("b is " + b);
    let d="4";
    d="6";
    console.log(d);
    const e="5";
    //e="6"; // -->This throws an error as const can be Updated
    console.log(e);
}
test();