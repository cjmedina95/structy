const compress = (s) => {
  let i = 0;
  let j = 0;
    
  let compressed_string = [];
    
  while (i <= s.length) {
    if (s[i] !== s[j]) {
      const multiplier = i - j;
      if (multiplier > 1) compressed_string.push(multiplier);
      compressed_string.push(s[j]);
      j = i;
    }
    
    i += 1;
  }
  
  return compressed_string.join('');
};

module.exports = {
  compress,
};
