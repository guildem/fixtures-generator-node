import * as numbers from './numbers'

let _lastTimestamp = null
let _lastMin = null
let _lastMax = null

export function timestamp({min = (Date.now() - (365*24*60*60*1000)), max = Date.now()} = {}) {
  _lastTimestamp = numbers.int({min, max})
  _lastMin = min
  _lastMax = max
  return _lastTimestamp
}

export function after({max = _lastMax} = {}) {
  return timestamp({min: _lastTimestamp, max: max})
}

export function before({min = _lastMin} = {}) {
  return timestamp({min: _lastMin, max: _lastTimestamp})
}

export function last() {
  return _lastTimestamp
}

export function erase() {
  _lastTimestamp = null
  _lastMin = null
  _lastMax = null
}
