// Add your functions here

function map(array, block){
    let newArray = [];

    for (let i = 0; i < array.length; i++){
        newArray.push((block)(array[i]))
    }

    return newArray;
}

function reduce(array, block, startingPoint=0){
    let total = array[0];


    for (let i = 1; i < array.length; i++){
        total = (block)(total, array[i]);
    }

    if (typeof startingPoint == 'number' && typeof total == 'number'){
        total += startingPoint;
    }

    return total
}