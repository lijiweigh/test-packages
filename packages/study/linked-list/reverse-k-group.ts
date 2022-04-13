/**
 * 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。

k 是一个正整数，它的值小于或等于链表的长度。

如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

进阶：

你可以设计一个只使用常数额外空间的算法来解决此问题吗？
你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-nodes-in-k-group
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484597&idx=1&sn=c603f1752e33cb2701e371d84254aee2&chksm=9bd7fabdaca073abd512d8fff18016c9092ede45fed65c307852c65a2026d8568ee294563c78&scene=21#wechat_redirect

interface Node {
  val: any,
  next: Node,
}

// 反转一个链表
function reverse(head: Node) {
  let pre: Node = null
  let cur: Node = head
  let next: Node = head

  while(cur) {
    next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
}

// 反转a到b之间的链表
function reverseAToB(a: Node, b: Node) {
  let pre: Node = null
  let cur: Node = a
  let next: Node = a

  while(cur !== b) {
    next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
}

// k个一组反转链表
function reverseKGroup(head: Node, k: number) {
  if (head === null) {
    return head
  }
  let left = head
  let right = head
  for(let i = 0; i < k; i++) {
    if (right === null) {
      return head
    }
    right = right.next
  }
  const last = reverseAToB(left, right)
  left.next = reverseKGroup(right, k)
  return last
}