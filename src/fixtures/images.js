import * as numbers from './numbers'

export function fakeImageUrl({width = 640, height = 480, bg = '282828', fg = 'EAE0D0', text = 'Fake Image'} = {}) {
  return `http://fakeimg.pl/${width}x${height}/${bg}/${fg}/?text=${text.replace(' ', '+')}`
}

export function realImageUrl({width = 640, height = 480, type = 'any', filter = ''} = {}) {
  return `http://placeimg.com/${width}/${height}/${type}${filter?'/'+filter:''}`
}

export function avatarUrl({gender = ''} = {}) {
  if (gender !== 'm' && gender !== 'f')
      gender = (numbers.bool() ? 'm' : 'f')

  if (gender === 'f')
    return `https://randomuser.me/api/portraits/women/${numbers.int({min:1, max: 99})}.jpg`
  return `https://randomuser.me/api/portraits/men/${numbers.int({min:1, max: 99})}.jpg`
}
