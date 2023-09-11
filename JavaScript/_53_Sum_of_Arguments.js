// Question : Sun(a)(b)(c)...(); --> Output : a+b+c...
let sum=function a(a) {
    return function b(b) {
        if(b) { // Until if b argument is empty ()
            return sum(a+b); // This recursively cal, the function again and again irrespective of number of Arguments
        } else {
            return a;
        }
    }
}
console.log(sum(1)(2)(3)());
console.log(sum(1)(2)(3)(4)(5)());