// We can see that the array copied in b and if an element is removed from b then it also reflect in a
// But we should not alter our original data
var a=[1,2,3,4,5];
var b=a;
b.pop();
console.log(a); // [ 1, 2, 3, 4 ]
console.log(b); // [ 1, 2, 3, 4 ]

// So we use Spreading which creates a copy of the array and doesn't alter original array
var c=[1,2,3,4,5];
var d=[...c];
d.pop();
console.log(c); // [ 1, 2, 3, 4, 5 ]
console.log(d); // [ 1, 2, 3, 4 ]
