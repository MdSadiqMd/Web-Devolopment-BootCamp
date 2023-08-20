// JavaScript is Synchronous(Execute Line-by-Line) but by using SetTimeOut() we can make Javascript Asynchronous by pausing a line to be Executed

// The Problems with Call backs are:
// 1. Callback Hell --> Here we end up with many callbacks which results unmaintainability of the Code
// 2. Inversion of Control --> Here in code we trust the Create Order Functions to call Proceed to Payment which is not a good place to be in as control is in hands of Create Order API other than the Devoloper
const cart=["Shoes","Pants","Kurta"];
api.createOrder(cart,function(){
    api.proceedToPayment(function(){
        api.showOrderSummary(function(){
            api.updateWallet();
        });
    });
});