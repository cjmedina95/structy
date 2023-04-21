// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const getNodeValue = (head, index) => {
  let i = 0;
  let current = head;
  
  while (i < index) {
    if (current.next === null) {
      return null;
    }
    
    current = current.next;
    i += 1;
  }
  
  return current.val;
};

module.exports = {
  getNodeValue,
};
