// this keyword in global scope
console.log(this);

function x(){
    console.log(this);
}
x();
window.x();