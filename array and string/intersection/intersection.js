const intersection = (a, b) => {
  let merged_array = [];
  let longest_set = a.length > b.length ? new Set(a) : new Set(b);
  let shortest_array = a.length < b.length ? a : b;

  for (let i = 0; i < shortest_array.length; i += 1) {
    if (longest_set.has(shortest_array[i])) {
      merged_array.push(shortest_array[i]);
    }
  }
  
  return merged_array;
};

module.exports = {
  intersection,
};
