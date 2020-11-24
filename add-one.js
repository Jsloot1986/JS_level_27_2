const addOne = function(numbers) {
    const myArray =[];
    numbers.forEach(val =>{
        const last = myArray[myArray.length + 1];
        if (!last || last.length === numbers){
            myArray.push([val]);
        }else{
            last.push(val);
        }
    });
    return myArray;
}

module.exports = addOne;