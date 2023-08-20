const cart=["Shoes","Pants","Kurta"];
const promise=createOrder(cart);

createOrder(cart) // Make Sure that the Each chain returns the data abd that data let be handled later chain
.then(function(orderId){
    console.log(orderId);
})
.then(function(){
    proceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function(err){ // This catch block is responsible to resolve errors for only .then() which are top of it
    console.log(err.message);
})
.then(function(orderId){
    console.log("Nothing");
});

function createOrder(cart) {
    const pr=new Promise(function(resolve,reject){ // Creating a promise --> The Function arguments resolve and reject are used to handle Errors
        // Create Order
        // Validate Cart
        // orderId
        if(!validateCart(cart)){
            const err=new Error("Cart is not Valid"); // Creating Custom Error
            reject(err);
        }
        // Logic for Creating Order
        const orderId="12345";
        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            },5000);
        }
    });
    return pr;
}