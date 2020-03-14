import { start } from "repl";

// Add your functions here
    
function map(someArray, someFunction){
    let array = []
    for(let i = 0 ; i< someArray.length; i++){
        array.push(someFunction(someArray[i]))
    }
    return array;
}

function reduce(someArray, someFunction, startingPoint=0){
    let i = 1;
    let total = someArray[0];  
    if (startingPoint){
        total = startingPoint + total;
        i = 1;
        
    }
    for(;i<someArray.length; i++){
        total = someFunction(someArray[i], total);
    }
    
    return total;

}