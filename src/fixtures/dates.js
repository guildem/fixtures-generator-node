import * as numbers from './numbers'

let lastTimestamp = null
let lastMin = null
let lastMax = null

export function timestamp({min = (Date.now() - (365*24*60*60*1000)), max = Date.now()} = {}) {
  lastTimestamp = numbers.int({min, max})
  lastMin = min
  lastMax = max
  return lastTimestamp
}

export function after({max = lastMax} = {}) {
  return timestamp({min: lastTimestamp, max: max})
}

export function before({min = lastMin} = {}) {
  return timestamp({min: lastMin, max: lastTimestamp})
}

export function last() {
  return lastTimestamp
}

export function erase() {
  lastTimestamp = null
  lastMin = null
  lastMax = null
}
