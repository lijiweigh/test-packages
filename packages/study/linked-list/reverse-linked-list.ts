// https://leetcode-cn.com/problems/reverse-linked-list-ii/
// https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484467&idx=1&sn=beb3ae89993b812eeaa6bbdeda63c494&chksm=9bd7fa3baca0732dc3f9ae9202ecaf5c925b4048514eeca6ac81bc340930a82fc62bb67681fa&scene=21#wechat_redirect
// 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。

interface Node {
  val: any,
  next: Node,
}

// 反转一个链表
export function reverse(head: Node) {
  if (head.next === null) {
    return head
  }
  const last = reverse(head.next)
  head.next.next = head
  head.next = null
  return last
}

// 反转一个链表的前n项
let successor = null
function reverseN(head: Node, n: number) {
  if (n === 1) {
    successor = head.next
    return head
  }
  const last = reverseN(head.next, n - 1)
  head.next.next = head
  head.next = successor
  return last
}

// 反转m到n之间的项
function reverseBetween(head: Node, m: number, n: number) {
  if (m === 1) {
    return reverseN(head, n)
  }
  head.next = reverseBetween(head.next, m - 1, n - 1)
  return head
}