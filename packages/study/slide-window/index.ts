export function slideWindow(s: string, t: string) {
  let left = 0
  let right = 0
  let start = 0
  let len = Number.MAX_SAFE_INTEGER
  let valid = 0
  const need = {}
  const window = {}
  for(const c of t) {
    if (!need[c]) {
      need[c] = 0
    }
    need[c]++
    window[c] = 0
  }
  const needCount = Object.keys(need).length
  while(right < s.length) {
    const c = s[right]
    right++
    if (need[c]) {
      window[c]++
      if (window[c] === need[c]) {
        valid++
      }
    }
    while(valid === needCount) {
      if (right - left < len) {
        start = left
        len = right - left
      }
      const tt = s[left]
      left++
      if (need[tt]) {
        if (window[tt] === need[tt]) {
          valid--
        }
        window[tt]--
      }
    }
  }
  return len === Number.MAX_SAFE_INTEGER ? '' : len
}