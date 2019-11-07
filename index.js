// Add your functions here
function map(sourceArray, fn){
    let newArr = [];
    for(let i = 0; i < sourceArray.length; i++){
        newArr.push(fn(sourceArray[i]));
    }
    return newArr;
}

function reduce(someArray, fn, startingPoint=0){
    let result = someArray[0];  
    if (startingPoint){
        result += startingPoint;
    }
    for(let i = 1;i<someArray.length; i++){
        result = fn(someArray[i], result);
    }
    
    return result;
}