const findNeedle = function(words) {
    const indexOfNeedle = words.findIndex(words => words === "needle") 
    return indexOfNeedle;
};
  
  module.exports = findNeedle;