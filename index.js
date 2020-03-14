// Add your functions here


function map(array, callback){
    let newArray = [];
    for(let i=0;i<array.length;i++){
        newArray.push(callback(array[i]));
    }
    return newArray;
}

function reduce(array, callback, startingPoint){
    let i = 0;
    let total = 0;

    if (typeof startingPoint === "number" && startingPoint !== 0){
        total = startingPoint;
    }else {
       total = array[i];
       i=1;
    }

    for(i;i<array.length;i++){
        total = callback(array[i], total);
    }
    return total;
}
