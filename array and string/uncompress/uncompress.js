const uncompress = (s) => {
  
  // Due to runtime complexity, an array is used rather than string concatenation with +=.
  let uncompressed_string = [];
  const numbers = '0123456789'
  
  let letterPointer = 0;
  let numericPointer = 0;
  
  while (letterPointer < s.length) {
    
    if (numbers.includes(s[letterPointer])) {
        letterPointer += 1;
    }
    else {
      const numberStore = Number(s.slice(numericPointer, letterPointer));
      
      for (let count = 0; count < numberStore; count += 1) {
        uncompressed_string.push(s[letterPointer]);
      }      
      
      letterPointer += 1;
      numericPointer = letterPointer;
    }
  }
    
  return uncompressed_string.join('');
};

module.exports = {
  uncompress,
};
