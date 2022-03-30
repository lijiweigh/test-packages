export class Graph {
  vertices: string[]
  edges: {[key: string]: string[]}

  constructor() {
    this.vertices = []
    this.edges = {}
  }

  addVertice(v: string) {
    this.vertices.push(v)
    this.edges[v] = []
  }

  addEdge(from: string, to: string) {
    this.edges[from].push(to)
    this.edges[to].push(from)
  }

  bfsVisit(v, cb?: (key: string) => void) {
    const queue = []
    const colors = {}
    for (const v of this.vertices) {
      colors[v] = 'white'
    }
    queue.unshift(v)
    while(queue.length > 0) {
      const cur = queue.pop()
      colors[cur] = 'grey'
      const children = this.edges[cur]
      for (const child of children) {
        if (colors[child] === 'white') {
          colors[child] = 'grey'
          queue.unshift(child)
        }
      }
      cb && cb(cur)
      colors[cur] = 'black'
    }
  }

  bfsVisitD(v: string, cb?: (key: string) => void) {
    const queue = []
    const colors = {}
    const d = {}
    const pred = {}
    for (const v of this.vertices) {
      colors[v] = 'white'
      d[v] = 0
      pred[v] = null
    }
    queue.unshift(v)
    while(queue.length > 0) {
      const cur = queue.pop()
      colors[cur] = 'grey'
      const children = this.edges[cur]
      for (const child of children) {
        if (colors[child] === 'white') {
          colors[child] = 'grey'
          queue.unshift(child)
          d[child] = d[cur] + 1
          pred[child] = cur
        }
      }
      cb && cb(cur)
      colors[cur] = 'black'
    }
  }

  dfsVisit(v: string, cb?: (key: string) => void) {
    const colors = {}
    for (const child of this.vertices) {
      colors[child] = 'white'
    }
    dfsVisitFn(v, colors, this.edges, cb)

  }
}

function dfsVisitFn(v: string, colors: any, edges: {[key: string]: string[]}, cb?: (key: string) => void) {
  colors[v] = 'grey'
  cb && cb(v)
  for (const child of edges[v]) {
    if (colors[child] === 'white') {
      dfsVisitFn(child, colors, edges, cb)
    }
  }
  colors[v] = 'black'
}