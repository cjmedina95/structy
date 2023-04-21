// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const zipperLists = (head1, head2) => {
  const head = head1;
  let currentA = head1.next;
  let currentB = head2;
  let tail = head;
  let count = 0;
  
  while (currentA !== null && currentB !== null) {    
    if (count % 2 === 1) { // Insert node from head1
      tail.next = currentA;
      currentA = currentA.next;
    }
    else if (count % 2 === 0) { // Insert node from head2
      tail.next = currentB;
      currentB = currentB.next;
    }
    
    tail = tail.next;
    count += 1;
  }
  
  if (currentA !== null) tail.next = currentA;
  if (currentB !== null) tail.next = currentB;
  
  return head;
};

module.exports = {
  zipperLists,
};
