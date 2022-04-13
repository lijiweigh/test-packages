function swap(arr: number[], x, y) {
  const temp = arr[x]
  arr[x] = arr[y]
  arr[y] = temp
}

export function bubbleSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, i, j)
      }
    }
  }
}

export function selectSort(arr: number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    let temp = i
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[temp]) {
        temp = j
      }
    }
    swap(arr, temp, i)
  }
}

export function insertSort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    let temp = i
    let j = i
    while(j > 0 && arr[j - 1] > arr[temp]) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = arr[temp]
  }
}

export function mergeSort(arr: number[]) {
  if (arr.length <= 1) {
    return arr
  }
  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)
  return mergeSortFn(mergeSort(left), mergeSort(right))
}

export function mergeSortFn(left: number[], right: number[]) {
  let il = 0
  let ir = 0
  let leftLen = left.length
  let rightLen = right.length
  const result = []
  while(il < leftLen && ir < rightLen) {
    if (left[il] < right[ir]) {
      result.push(left[il])
      il++
    } else {
      result.push(right[ir])
      ir++
    }
  }
  while(il < left.length) {
    result.push(il++)
  }
  while(ir < right.length) {
    result.push(ir++)
  }
  return result
}

export function quickSort(arr: number[], left, right) {
  if (arr.length > 1) {
    const index = quickSortFn(arr, left, right)
    if (left < index - 1) {
      quickSort(arr, left, index - 1)
    }
    if (index < right) {
      quickSort(arr, index, right)
    }
  }
}

export function quickSortFn(arr: number[], left: number, right: number) {
  const mid = arr[Math.floor((left + right) / 2)]
  let il = left
  let ir = right
  while(il <= ir) {
    while([arr[il] < mid]) {
      il++
    }
    while(arr[ir] > mid) {
      ir--
    }
    if (il <= ir) {
      swap(arr, il, ir)
      il++
      il--
    }
  }
  return il
}