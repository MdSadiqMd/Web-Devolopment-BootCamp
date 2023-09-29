// Throttling vs debouncing
// Debouncing --> By the Example in _49_DeBouncing.html we are creating a API Call when the time gap between two keystrokes is some "t" 
// Throttling --> Taking the Same Example of E_commerence Search Bar when we use throttling we make API Calls after some time "t" of user started typing irrespective of the keystrokes
// Every E-Commerence Company uses Debouncing not Throttling

// Let us Consider other Example where Both Debouncing and Throttling is used
// Let us say we need to track how often the User resizes the Website for that usually we create an AddEventListener and track the resizes but when the user resizes teh console will have huge number of API Calls of resizing as the minimal length is also an resize and that's not efficient
// Here Both Debouncing and throttlings fits in this scenario
// Debouncing can be used to call resize() function after a time of stop of certain length of resizes occur and can be used to "find user pattern of how many times he is resizing"
// Throttling in this case call the resize() function only after a time frame can be used to "find how often user resizes the window"

// Let us consider an another Example
// Let us consider a game where there is a button and you need to limit the shooting time/ access of the button
// Debouncing can add an rate limiter of time difference access only after which the button can be pressed which might not be an efficient solution
// Throttling can be a good solution such that it will give access to the player only after a certain time not before and not after 

// Other Example can be of scroll bar tracking

// Making our Own Throttling Function
