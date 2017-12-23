import { integer } from './numbers'
import { list } from './utils'

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt. ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor reprehenderit voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim est laborum.'
        .toLowerCase().split(/\s*[,. ]\s*/).filter(w => (w !== undefined && w.length > 0))

export function word() {
  return list({values: lorem})
};

export function words({min = 5, max = 15, sentence = true} = {}) {
  let result = []
  let count = Math.max(1, integer({min, max}))

  while (count > 0) {
    result.push(word())
    count--
  }

  result[0] = result[0][0].toUpperCase() + result[0].slice(1)

  return result.join(' ') + (sentence ? '.' : '')
};

export function sentences({min = 2, max = 4} = {}) {
  let result = []
  let count = Math.max(1, integer({min, max}))

  while (count > 0) {
    result.push(words())
    count--
  }

  return result.join(' ')
}

export function paragraphes() {
  let result = []
  let count = Math.max(1, integer({min, max}))

  while (count > 0) {
    result.push(sentences())
    count--
  }

  return result.join('\n')
}
