// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const reverseList = (head) => {
  let tail = null;
  let current = head;
  
  while (current !== null) {
    let next = current.next;
    current.next = tail;
    tail = current;
    current = next;
  }
    
  return tail;
};

module.exports = {
  reverseList,
};
