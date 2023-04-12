const mostFrequentChar = (s) => {
  let letter = null;
  let count = {};
  
  for (let char of s) {
    if (!count[char]) {
      count[char] = 0;
    }
    count[char] += 1;
  }
  
  for (let key in count) {
    if (!letter || count[key] > count[letter]) {
      letter = key;
    }
  }
  
  return letter;
};

module.exports = {
  mostFrequentChar,
};
