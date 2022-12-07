const removeFromArray = function(array, ...values) {
    const delArray = Array.from(values);
    for (let i = 0; i < delArray.length; i++) {
        array = array.filter(item => item !== delArray[i]);
    }
    
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
