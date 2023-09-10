// Higher Order Function --> The Function which takes a Function as Argument or return a Function as Result is Called Higher Order Function


// Code for Returning Area of a circle for array of Radius
const radius=[1,2,3,4];
const result=function (radius){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(Math.PI*radius[i]*radius[i]);
    }
    return output;
}
console.log(result(radius));

// Code for Returning Circumference of a circle for array of Radius
const radius1=[1,2,3,4];
const result1=function (radius1){
    const output=[];
    for(let i=0;i<radius1.length;i++){
        output.push(2*Math.PI*radius1[i]);
    }
    return output;
}
console.log(result1(radius));

// Code for Returning Diameter of a circle for array of Radius
const radius2=[1,2,3,4];
const result2=function (radius2){
    const output=[];
    for(let i=0;i<radius2.length;i++){
        output.push(radius2[i]*radius2[i]);
    }
    return output;
}
console.log(result2(radius));

// Using Higher Order Functions We can Simplify the things
const area=function(radius3){
    return Math.PI*radius[i]*radius[i];
};
const circumference=function(radius3){
    return 2*Math.PI*radius3[i];
};
const diameter=function(radius3){
    return 2*radius3[i];
};
const radius3=[1,2,3,4];
const result3=function (radius3,logic){
    const output=[];
    for(let i=0;i<radius3.length;i++){
        output.push(logic(radius3[i]));
    }
    return output;
}
console.log(result3(radius3,area));
console.log(result3(radius3,circumference));
console.log(result3(radius3,diameter));

// Using map --> Which map radius3 array with Logic and return array
console.log(radius3.map(area));
console.log(radius3.map(circumference));
console.log(radius3.map(diameter));