// Working of Javascript Engine (We are considering V8)
// Code --> Parsing --> Compilation --> Execution
// Parsing --> In this step the Code is broken into tokens and the Syntax Parser is Converted into a Abstract Syntax Tree 
//             The Abstract Synatax Tree can be seen in astexexplorer.net
// Compilation --> Javascript is noth Interpreted(Execute Line by Line) and Compiled(Convert the Code to Optimized Code and Run the Optimized Code) Language
//                 Javascript line by Line and parallelly compile the code for Efficiency and Convert the Code to Byte Code and Push into Call Stack or Web API Environment Accordingly for Execution 
// Execution --> Javascript Execution are of two Things "Memeory Heap" where all variables / Functions Present and here where the Garbage Collection happens
//               ***The Garbage Collection Happens in two Phases:
//               1. Mark phase --> All objects are marked as 0 initially (at creation) and in mark phase the objects that will be accessible are marked as 1 (reachable) by a DFS graph traversal
//               2. Sweep Phase --> During sweep phase, the objects marked with 0 are removed from heap memory. and also all reachable objects are again initialized with 0 (made unreachable) because the algorithm will run again
// In case of V8 Engine Interpreter is called "Ignition" ,Compiler is called as "Turbo Fan" and Garbage Collector is called as "Orinoco"
// Caching --> consider a scenario that there are three sript files once we wrote code and form the output when we again open the browser
//             these three files will not again will be loaded if there is no change in the files they will be stored in the cache