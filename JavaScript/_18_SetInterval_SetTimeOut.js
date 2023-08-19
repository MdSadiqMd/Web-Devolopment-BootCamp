/*function x(){
    var i=1;
    setTimeout(function(){
        console.log(i);
    },3000);
    console.log("Hello World");
}
x(); // Hello World
     // *After one second
     // 1
     // Explanation : Set time out takes the function attach timer to it and print when the timer time expires meanwhile it prints remaining code
*/

// *******Printing i numbers each After ith seconds

/*function a(){
    for(var i=0;i<=5;i++){
        setTimeout(function (){
            console.log(i);
        },i*1000);
    }
    console.log("Hello World");
}
a(); // output : 6 6 6 6 6 6
     // But we need  0 1 2 3 4 5
     // This is Because here we know from _17_Clousures that the Javascript will print "Hello World" 
     // and come back and run the loop but loop is outer of setTimeout so the loop in the process before time out time completes
     // it have been iterated and initilized var to 6 and as i<=5 due to i++ not work it prints 6 6 6 6 6 6
     // To solve this Problem there are two solutions
*/

// Solution -1 --> Use a Function c() which makes a new copy of i every time
function a(){
    for(var i=0;i<=5;i++){
        function c(x){
            setTimeout(function (){
                console.log(x);
            },x*1000);
        }
        c(i);
    }
    console.log("Hello World");
}
a();

// Solution -2 --> Use let inplace of var in loop
/*function a(){
    for(let i=0;i<=5;i++){
        setTimeout(function (){
            console.log(i);
        },i*1000);
    }
    console.log("Hello World");
}
a();*/


// Browser Code Keep it in <Script><Script/> tag
/*
// Alert "Two seconds Over" after 2 seconds
setTimeout(function() {
    alert("Two seconds Over");
}, 2000);

// Clear the previously scheduled timeout
let a = setTimeout(function() {
    alert("Two seconds Over");
}, 2000);
clearTimeout(a);

// Use setTimeout with function arguments
const sum = (a, b) => {
    console.log("Output of Sum Function: " + (a + b));
};
setTimeout(function() {
    sum(1, 2);
}, 5000);

// Repeatedly display an alert every 2 seconds
setInterval(() => {
    alert("setInterval");
}, 2000);
clearInterval(); //Stops set Interval*/
