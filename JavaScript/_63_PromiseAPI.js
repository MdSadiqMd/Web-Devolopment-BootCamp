/*
Settled Promise Means the Promise is resolved (success) and Returned the Result
The Example of the Promise API where the Fecthing of Data is Done from three Random API's P1 in 3sec,P2 in 1 sec and P3 in 2sec

                                    If all are Successful               If Any one Fails

Promise.all([p1, p2, p3])           Returns an Array of Values          Returns the Error of the First Failed Promise
                                    (Fails if any promise fails)
Promise.allSettled([p1, p2, p3])    Returns an Array of Objects         Returns an Array of Objects
                                    with success and error values       with success and error values
Promise.race([p1, p2, p3])          Returns the Value of the            Returns the Value of the First
                                    First Settled Promise,              Settled Promise, whether it's a
                                    Irrespective of Success/            success or error
                                    Error (Fulfills on the first
                                    settled promise)
Promise.any([p1, p2, p3])           Returns the Value of the            Returns an Error Aggregate Array
                                    First Settled Promise that          of all failed promises if none of
                                    Succeeds, Irrespective of           the promises succeed
                                    Other Failed Promises
*/

const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("P1 Success"),3000)
});

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("P2 Success"),1000)
});

const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("P3 Success"),2000) 
    //setTimeout(()=>reject("P3 Fail"),2000) // If Wanted to Fail a Promise
});

/*Promise.all([p1,p2,p3])
.then((res)=>{
    console.log(res);   // [ 'P1 Success', 'P2 Success', 'P3 Success' ]
})
.catch((err)=>{
    console.log(err);   // P3 Fail
});

Promise.allSettled([p1,p2,p3])
.then((res)=>{
    console.log(res);   // [ { status: 'fulfilled', value: 'P1 Success' },{ status: 'fulfilled', value: 'P2 Success' },{ status: 'fulfilled', value: 'P3 Success' } ]
})
.catch((err)=>{
    console.log(err);   // [ { status: 'fulfilled', value: 'P1 Success' },{ status: 'fulfilled', value: 'P2 Success' },{ status: 'rejected', reason: 'P3 Fail' } ]
}); 

// Returns First Failed (or) Suceede Promise
Promise.race([p1,p2,p3])
.then((res)=>{
    console.log(res);   // P2 Success
})
.catch((err)=>{
    console.log(err);   // P2 Success
}); */

// Returns the First Suceeded Promise
// *** If All Promises fails then it will return an Aggregrated Error (change the P2 to 5000)
Promise.any([p1,p2,p3])
.then((res)=>{
    console.log(res);   // P2 Success
})
.catch((err)=>{
    console.log(err);   // P2 Success
}); 