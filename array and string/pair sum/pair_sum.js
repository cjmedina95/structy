const pairSum = (numbers, targetSum) => {
  let pair = [];
  let uniques = {};
  
    for (let i = 0; i < numbers.length; i += 1) {
      const complement = targetSum - numbers[i];
      if (complement in uniques) {
        pair.push(uniques[complement]);
        pair.push(i);
        return pair;
      }
      
      uniques[numbers[i]] = i;
    }
};

module.exports = {
  pairSum,
};
