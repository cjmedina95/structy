// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedListValues = (head) => {
  let values = [];
  
  while (head !== null) {
    values.push(head.val);
    head = head.next;
  }
  
  return values;
};

module.exports = {
  linkedListValues,
};
