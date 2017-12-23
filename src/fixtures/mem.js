import { integer } from './numbers'

let memorized = []

export function memorize = (value, {} = {}) => {
  if (!isMemorized(value))
    memorized.push(value)
  return value
}

export function isMemorized = (value, {} = {}) => {
  return memorized.includes(value)
}

export function getOneMemorized = ({forget = false} = {}) => {
  const index = integer({max: memorized.length - 1})
  const value = memorized[index]
  if (forget)
    forgetOneMemorized(value)
  return value
}

export function getAllMemorized = ({forget = false} = {}) => {
  const array = [].concat(memorized)
  if (forget)
    exports.forgetAllMemorized()
  return array
}

export function forgetOneMemorized = (value, {} = {}) => {
  memorized = memorized.filter(v => v !== value)
}

export function forgetAllMemorized = ({} = {}) => {
  memorized = []
}
