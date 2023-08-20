// Promise is a Object Representing the Eventual Completion of Async Operation
// Promise Solves Callback Hell and Inversion of Control Problem which Occurs in Callbacks
const cart=["Shoes","Pants","Kurta"];

// Callback Hell
// Using Callback --> Here we directly pass Function as an Argument
createOrder(cart,function(){
    proceedToPayment(function(){
        showOrderSummary(function(){
            updateWallet();
        });
    });
});

// Using Promises -- > We pass the Function as an Reference to other Function (More Control)
createOrder(cart)
 .then(function (orderID){
    return proceedToPayment(orderID);
 })
 .then(function (orderID){
    return showOrderSummary(orderID);
 })
 .then(function (orderID){
    return updateWallet(orderID);
 })

 // (or) 
 // We can even use Arrow Functions
createOrder(cart)
 .then(orderID => proceedToPayment(orderID))
 .then(orderID => showOrderSummary(orderID))
 .then(orderID => updateWallet(orderID))


// Inversion of Control
// Using Callback --> Here we directly pass Function as an Argument
createOrder(cart,function(orderID){
    proceedToPayment(orderID);
});

// Using Promises -- > We pass the Function as an Reference to other Function (More Control)
const promise=createOrder(cart);

promise.then(function(OrderID){
    proceedToPayment(OrderID);
});