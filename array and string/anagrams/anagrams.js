const anagrams = (s1, s2) => {
  let keys = {};
  
  if (s1.length !== s2.length) return false;
  
  for (let char of s1) {
    if (!(char in keys)) keys[char] = 0;
    keys[char] += 1;
  }
  
  for (let char of s2) {
    if (!keys[char]) return false;
    keys[char] -= 1;
  }
    
  for (let char in keys) {
    if (keys[char] !== 0) return false;
  }
  
  return true;
};


module.exports = {
  anagrams,
};
