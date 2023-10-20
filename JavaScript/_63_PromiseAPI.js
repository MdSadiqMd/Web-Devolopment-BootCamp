/*

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
