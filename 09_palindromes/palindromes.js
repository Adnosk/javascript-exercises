const palindromes = function (word) {
    const fixedWord = word.toLowerCase().replace(/[\W_]/g,'');
    const flippedWord = fixedWord.split('').reverse().join('');
    return fixedWord === flippedWord;
};

// Do not edit below this line
module.exports = palindromes;
