// The empty file is the shortest JS Program as there will be an global in browser console with contains indefined Methods

// this Keyword
var a=10;
function b(){
    var x=10;
}
// This three will point to the same Area in Browser Global area we use different in different contexts
console.log(a);
console.log(this.a);
console.log(window.a);