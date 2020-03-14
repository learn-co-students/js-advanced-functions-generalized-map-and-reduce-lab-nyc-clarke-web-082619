
function map(arr,func) {
    return arr.map(element => func(element));
}

function reduce(arr, func, start) {
    if (typeof start === "number") 
       return arr.reduce((total, element) => func(total,element,start),start);
    else 
        return arr.reduce((total, element) => func(total,element,start));
}

