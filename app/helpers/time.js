import _ from 'lodash'

export const padded = val => val < 10 ? _.padStart(val, 2, '0') : val

export const clockTimer = fn => {
  const time = 1000 - (Date.now() % 1000)
  return setTimeout(() => {
    if (fn.clear !== true) {
      fn()
      clockTimer(fn)
    }
  }, time)
}
