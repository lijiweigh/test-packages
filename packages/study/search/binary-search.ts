export function binarySearch(nums: number[], target: number) {
  let left = 0
  let right = nums.length - 1
  while(left <= right) {
    const mid = left + (right - left) / 2
    if (target === nums[mid]) {
      return mid
    } else if (target > nums[mid]) {
      left = mid + 1
    } else if (target < nums[mid]) {
      right = mid - 1
    }
  }
  return -1
}

function leftBound(nums: number[], target: number) {
  let left = 0
  let right = nums.length - 1
  while(left <= right) {
    const mid = left + (right - left) / 2
    if (target === nums[mid]) {
      right = mid - 1
    } else if (target > nums[mid]) {
      left = mid + 1
    } else if (target < nums[mid]) {
      right = mid - 1
    }
  }
  if (left >= nums.length || nums[left] !== target) {
    return - 1
  }
  return left
}

function rightBound(nums: number[], target: number) {
  let left = 0
  let right = nums.length - 1
  while(left <= right) {
    const mid = left + (right - left) / 2
    if (target === nums[mid]) {
      left = mid + 1
    } else if (target > nums[mid]) {
      left = mid + 1
    } else if (target < nums[mid]) {
      right = mid - 1
    }
  }
  if (right < 0 || nums[right] !== target) {
    return -1
  }
  return right
}
