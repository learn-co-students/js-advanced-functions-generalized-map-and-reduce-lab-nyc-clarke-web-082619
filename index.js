// Add your functions here
function map(arr, fcn){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(fcn(arr[i]))
    }
    return result
}

function reduce(arr, fcn, start){

    let result = (!!start) ? start : arr[0];
    let i = (!!start) ? 0 : 1;
    for(; i < arr.length; i++){
        result = fcn(arr[i], result)
    }
    return result
}