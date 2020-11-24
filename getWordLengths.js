const getWordLengths = function(someWords) {
    const array = [];
    return someWords.reduce((prev, nxt) =>{
        prev[nxt] = (prev[nxt]+1)||1;
        return array;
    }, {});
};

module.exports = getWordLengths;
