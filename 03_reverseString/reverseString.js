const reverseString = function(word) {
    const splitWord = word.split('');
    splitWord.reverse();
    return splitWord.join('');
};

// Do not edit below this line
module.exports = reverseString;
