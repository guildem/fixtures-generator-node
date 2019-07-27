import * as numbers from './numbers'

let _memory = {}

function _check(name) {
  if (!Array.isArray(_memory[name]))
    _memory[name] = []
}

function _index(name) {
  return numbers.int({min:0,max: _memory[name].length - 1})
}

export function keep(value, name = '_default') {
  _check(name)
  _memory[name].push(value)
  return value
}
export const save = keep
export const memorize = keep
export const retain = keep

export function one(name = '_default') {
  _check(name)
  if (_memory[name].length < 1) return null
  return _memory[name][_index(name)]
}
export const get = one

export function pop(name = '_default') {
  _check(name)
  if (_memory[name].length < 1) return null
  return _memory[name].splice(_index(name), 1).pop()
}

export function all(name = '_default') {
  _check(name)
  return _memory[name]
}
export const array = all

export function clear(name = '_default') {
  _check(name)
  _memory[name] = []
}
export const clean = clear
export const erase = clear
