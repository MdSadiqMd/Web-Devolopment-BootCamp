// Suppose we have a problem to change the state (null initially) to A and then to B 
// For changing the State we have two Async functions which one change the state to A and other change the state to B
// Here the Problem is the Languages like JS are Multi threadedwhere we can't say that A function will execute first and then B as Single threaded it may change to B and then A
// This problem is called Race Condition where every Async() funtion compete for the execution 
// To solve this problem we can use setTimeout() method but as we don't know in how much time the state will change setTimeout() is not an optimized/correct Approach
// *** To Solve this issue we use flag(Boolean values) 

let  