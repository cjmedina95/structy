const pairProduct = (numbers, targetProduct) => {
  let tested_numbers = {};
  
  for (let i = 0; i < numbers.length; i += 1) {
    if (!(numbers[i] in tested_numbers)) {
      const complement = targetProduct / numbers[i];
      if (complement in tested_numbers) {
        return [tested_numbers[complement], i];
      }
      
      tested_numbers[numbers[i]] = i;
    }
  }
};

module.exports = {
  pairProduct,
};
