function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

var oddEvenList = function (head) {
  if (head === null) {
    return null
  }
  if (head.next === null) {
    return head
  }
  let odd = head, even = head.next, evenHead = head.next;
  console.log(evenHead)
  while (even !== null && even.next !== null) {
    odd.next = odd.next.next;
    odd = odd.next;
    even.next = even.next.next;
    even = even.next;
  }
  odd.next = evenHead;
  console.log(evenHead, head.next)
  return head;
};

let node5 = new ListNode(5)
let node4 = new ListNode(4, node5)
let node3 = new ListNode(3, node4)
let node2 = new ListNode(2, node3)
let node1 = new ListNode(1, node2)

console.log(oddEvenList(node1))