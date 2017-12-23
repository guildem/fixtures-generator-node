import { integer } from './numbers'

export function list({values}) {
  if (values.length < 1)
    return undefined
  return values[Math.floor(Math.random() * values.length)]
}

export function mask({format}) {
  let result = ''
  const array = format.split('')
  for (let i = 0; i < array.length; i++) {
    if (array[i] === '\\') {
      if (i === array.length - 1)
        return '#error#'
      result += array[i+1]
      i++
      continue
    }

    if (array[i] === '[') {
      let values = []
      i++
      while (i < array.length - 1) {
        if (array[i] === ']')
          break

        if (array[i] === '-') {
          if (values.length === 0 || i === (array.length - 1) || array[i+1] === ']' || format.charCodeAt(i-1) >= format.charCodeAt(i+1))
            return '#error#'
          let c = format.charCodeAt(i-1)
          while (c !== format.charCodeAt(i+1)) {
            values.push(String.fromCharCode(c))
            c++
          }
        } else {
          values.push(array[i])
        }

        i++
      }
      if (array[i] !== ']')
        return '#error'
      result += list({values})
      continue
    }

    if (!isNaN(array[i])) {
      result += integer({min: 0, max: 9})
      continue
    }

    result += array[i]
  }
  return result
}
