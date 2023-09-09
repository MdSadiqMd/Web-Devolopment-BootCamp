// If we want to print Elements in array
for(const value of [1,2,3,4,5]){
    console.log(value);
}
// Here the for-loop has built in Function which performs the traversal
// But in Production we cannot use built in Functions so let's Write the iterator Function from Sratch
function* makeRangeIterator(start , end , step ) { // ****function* the "*" represents generic which means we can access the function in for-loop
    let nextIndex = start;
    let iterationCount = 0;
  
    const rangeIterator = {
      next() {
        let result;
        if (nextIndex < end) {
          result = { value: nextIndex, done: false };
          nextIndex += step;
          iterationCount++;
          return result;
        }
        return { value: iterationCount, done: true };
      },
    };
    return rangeIterator;
}
const it = makeRangeIterator(1, 10, 2); 

let result = it.next();
while (!result.done) {
  console.log(result.value); // 1 3 5 7 9
  result = it.next();
}

console.log("Iterated over sequence of size:", result.value); 

// Let us try the Iterator Function we created in for-loop
// we can able to access the makeRangeIterator() in for-loop by using generator "*" Fucntion
const it1=makeRangeIterator(1,5,1);
for(const value of it1){
    console.log(value);
}
  
// ***** The yield operator is used to delegate to another iterable object, such as a Generator.
// We can create the Iterator Function using Yeild and generics
function* makeRangeIterator1(start = 0, end = Infinity, step = 1) {
    let iterationCount = 0;
    for (let i = start; i < end; i += step) {
      iterationCount++;
      yield i;
    }
    return iterationCount;
}
const it2=makeRangeIterator1(1,5,1);
for(const value of it2){
    console.log(value);
}
  
  
