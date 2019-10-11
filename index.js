function map(sourceArray, change){
    let newArr = []
    for(let i=0; i<sourceArray.length; i+=1){
        newArr.push(change(sourceArray[i]))
    }
    return newArr
}

function reduce(sourceArray, change, startingPoint) {
    let newNum = (!!startingPoint) ? startingPoint : sourceArray[0]
    let i = (!!startingPoint) ? 0 : 1
    for(; i<sourceArray.length; i+=1){
        newNum = change(sourceArray[i], newNum)
    }
    return newNum
}