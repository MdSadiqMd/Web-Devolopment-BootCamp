//In javascript we can change the type of variable in runtime
function test() {
    var a = "3";
    var b = "8";
    var c = a;
    a = b;
    b = c;
    console.log("a is " + a);
    console.log(b);
}
test();