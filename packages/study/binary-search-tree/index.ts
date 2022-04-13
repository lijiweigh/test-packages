type NodeType = string | number

type TraverseCb = (key: NodeType) => void

export class Node {
  key: NodeType
  left: Node
  right: Node

  constructor(key: NodeType) {
    this.key = key
    this.left = null
    this.right = null
  }
}

export class BST {
  root: Node

  constructor() {
    this.root = null
  }

  insert(key: NodeType) {
    const node = new Node(key)
    if (this.root === null) {
      this.root = node
    } else {
      insertNode(this.root, key)
    }
  }

  search(key: NodeType) {
    return searchNode(this.root, key)
  }

  min() {
    let node = this.root
    while(node && node.left) {
      node = node.left
    }
    return node?.key || null
  }

  max() {
    let node = this.root
    while(node && node.right) {
      node = node.right
    }
    return node?.key || null
  }

  inOrderTraverse(cb?: TraverseCb) {
    inOrderTraverseFn(this.root, cb)
  }

  preOrderTraverse(cb?: TraverseCb) {
    preOrderTraverseFn(this.root, cb)
  }

  postOrderTraverse(cb?: TraverseCb) {
    postOrderTraverseFn(this.root, cb)
  }

  remove(key: NodeType) {
    this.root = removeNode(this.root, key)
  }
}

function insertNode(node: Node, key: NodeType) {
  if (key < node.key) {
    if (node.left === null) {
      node.left = node
    } else {
      insertNode(node.left, key)
    }
  } else {
    if (node.right === null) {
      node.right = node
    } else {
      insertNode(node.right, key)
    }
  }
}

function searchNode(node: Node, key: NodeType) {
  if (node === null) {
    return false
  }
  if (node.key === key) {
    return true
  }
  if (key < node.key) {
    return searchNode(node.left, key)
  }
  if (key > node.key) {
    return searchNode(node.right, key)
  }
}

function inOrderTraverseFn(node: Node, cb?: TraverseCb) {
  if (node) {
    inOrderTraverseFn(node.left)
    cb && cb(node.key)
    inOrderTraverseFn(node.right)
  }
}

function preOrderTraverseFn(node: Node, cb?: TraverseCb) {
  if (node) {
    cb && cb(node.key)
    preOrderTraverseFn(node.left, cb)
    preOrderTraverseFn(node.right, cb)
  }
}

function postOrderTraverseFn(node: Node, cb?: TraverseCb) {
  if (node) {
    postOrderTraverseFn(node.left, cb)
    postOrderTraverseFn(node.right, cb)
    cb && cb(node.key)
  }
}

function removeNode(node: Node, key: NodeType) {
  if (node === null) {
    return null
  }
  if (key < node.key) {
    node.left = removeNode(node.left, key)
    return node
  } else if (key > node.key) {
    node.right = removeNode(node.right, key)
    return node
  } else {
    if (node.left === null && node.right === null) {
      return null
    }
    if (node.left === null) {
      return node.right
    }
    if (node.right === null) {
      return node.left
    }
    const minAtRight = minNode(node.right)
    node.key = minAtRight
    node.right = removeNode(node.right, minAtRight)
    return node
  }

}

function minNode(node: Node) {
  while(node && node.left) {
    node = node.left
  }
  return node?.key || null
}