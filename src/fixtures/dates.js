import { integer } from './numbers'

let lastTimestamp = 0

export function timestamp({min = (Date.now() - (365*24*60*60*1000)), max = Date.now()} = {}) {
  lastTimestamp = integer({min, max})
  return lastTimestamp
}

export function last() {
  return lastTimestamp
}
