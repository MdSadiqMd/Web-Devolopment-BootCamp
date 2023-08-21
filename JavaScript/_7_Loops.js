// for Loop
for(let i=0;i<100;i++){ // ***If we used var here then it will be globally scoped (Remember for tricky Questions)
    console.log(i);
}

// for-Each Loops
let a=[1,2,3,4,5];
a.forEach(function(val){
    console.log(val+2);
});

// for-in Loops
let obj={
    "Harry":true,
    "sadiq":false,
    "Akhil":67,
    "Ravi":undefined
}
for(let a in obj){
    console.log(a+" "+obj[a]);
}

// for-of loops
for(let b of "sadiq"){ // Here the Object must be iterable
    console.log(b);
}

// While Loop
let i=0;
while(i<10){
    console.log(i);
    i++;
}

// Do-while loop
let j=0;
do{
    console.log(j);
    j++;
}while(i=10);