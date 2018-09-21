const numbers = require('./numbers')

export function oneOf(values) {
  if (!Array.isArray(values) || values.length < 1) return null
  return values[numbers.int({min:0,max:values.length-1})]
}

export function array(count = 0, map) {
  if (count < 0) count = 0

  const a = new Array(count)
  if (typeof map === 'function')
    for (let i = 0; i < count; i++)
      a[i] = map(i)
  return a
}

// export function mask(format) {
//   let result = ''
//   const array = format.split('')
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === '\\') {
//       if (i === array.length - 1)
//         return '#error#'
//       result += array[i+1]
//       i++
//       continue
//     }
//
//     if (array[i] === '[') {
//       let values = []
//       i++
//       while (i < array.length - 1) {
//         if (array[i] === ']')
//           break
//
//         if (array[i] === '-') {
//           if (values.length === 0 || i === (array.length - 1) || array[i+1] === ']' || format.charCodeAt(i-1) >= format.charCodeAt(i+1))
//             return '#error#'
//           let c = format.charCodeAt(i-1)
//           while (c !== format.charCodeAt(i+1)) {
//             values.push(String.fromCharCode(c))
//             c++
//           }
//         } else {
//           values.push(array[i])
//         }
//
//         i++
//       }
//       if (array[i] !== ']')
//         return '#error'
//       result += oneOf({values})
//       continue
//     }
//
//     if (array[i] === ' ') {
//       result += ' '
//       continue
//     }
//
//     if (!isNaN(array[i])) {
//       result += numbers.int({min: 0, max: 9})
//       continue
//     }
//
//     result += array[i]
//   }
//   return result
// }
