// Stack Memory:
// - ***In stack we get Copy of the Value
// - The stack is used for managing function calls and local variables.
// - It follows the Last In, First Out (LIFO) principle.
// - Each function call creates a new execution context that is pushed onto the stack.
// - Local variables are stored in the execution context on the stack.

function exampleStack() {
    let stackVariable = "I'm on the stack!";
    console.log(stackVariable);
}

exampleStack(); // Calling 'exampleStack' pushes its execution context onto the stack.

// Heap Memory:
// - ***In Heap the Original Data is Transfered **Not Copy
// - The heap is used for storing objects and data structures.
// - Objects in the heap can persist across function calls and have a longer lifetime.
// - Variables in the stack can hold references to objects in the heap.

let heapObject = { message: "I'm in the heap!" }; // 'heapObject' is an object stored in the heap.

function exampleHeap() {
    let referenceToHeapObject = heapObject; // 'referenceToHeapObject' holds a reference to 'heapObject'.
    console.log(referenceToHeapObject.message);
}

exampleHeap(); // Calling 'exampleHeap' pushes its execution context onto the stack.

// Variable Rewriting:
// - In JavaScript, variables can be rewritten with new values.
// - When a variable is rewritten, it doesn't change where it's stored (stack or heap), but its value does change.

function variableRewriting() {
    let variableInStack = "Original Value"; // 'variableInStack' is initially in the stack.
    let referenceToHeapObject = heapObject; // 'referenceToHeapObject' holds a reference to 'heapObject'.
    
    console.log("Before Rewriting:");
    console.log(variableInStack);
    console.log(referenceToHeapObject.message);

    variableInStack = "New Value"; // Variable 'variableInStack' is rewritten with a new value.

    console.log("After Rewriting:");
    console.log(variableInStack); // The value of 'variableInStack' in the stack is updated.
    console.log(referenceToHeapObject.message); // The value of 'referenceToHeapObject' in the heap remains unchanged.
}

variableRewriting(); // Calling 'variableRewriting' pushes its execution context onto the stack.
