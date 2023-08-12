// Map, reduce and Filter can be executed by using Different for loops alse but the difference is that these are pre-defined methods which make our job easy and create a new Array after Operations by not distorting our Original Array

// Map --> this will Perform Operations on the Array and in result Create a New Array at the End
let arr=[43,21,23];
let a=arr.map((value,index,array)=>{
    console.log(value+1," ",index," ",array);
})
console.log(arr); // The original Array remain Unchanged

// Filter --> It's used to perform Operations of Filtering On array
let a1=arr.filter((a)=>{
    return a<30;
})
console.log(a1);

// Reduce --> It's used perform Desired Operations for First two Inouts of array and By recrusion next two
let a2=arr.reduce((h1,h2)=>{
    return h1+h2;
});
console.log(a2);