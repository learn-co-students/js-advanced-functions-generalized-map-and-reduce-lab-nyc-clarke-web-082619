// Add your functions here
function map(arr, f){
    let r = []
    for (let i = 0; i < arr.length; i++){
        r.push(f(arr[i]));
    }
    return r;
}

function reduce(arr,f,startingValue){
    let res = arr[0];
    // if(startingValue != undefined){
    //     res = startingValue;
    // }
    //const reducer = (accumulator=0,currentValue) => f(accumulator,currentValue);
    for (let i = 0; i< arr.length-1; i++){
        res = f(res, arr[i+1]);
    }
    if(startingValue != undefined){
        return f(res, startingValue);
    }
    else{
        return res;
    }
}