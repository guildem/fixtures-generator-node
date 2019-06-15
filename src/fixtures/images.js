import * as numbers from './numbers'
import * as lorem from './lorem'

export function fakeImageUrl({width = 640, height = 480, bg = '282828', fg = 'EAE0D0', text = 'Fake Image'} = {}) {
  return `http://fakeimg.pl/${width}x${height}/${bg}/${fg}/?text=${text.replace(' ', '+')}`
};

export function realImageUrl({width = 640, height = 480, type = 'any', filter = ''} = {}) {
  return `http://placeimg.com/${width}/${height}/${type}${filter?'/'+filter:''}`
};

export function avatarUrl({size = 128, name = ''} = {}) {
  if (!name)
    name = lorem.word()

  return `https://api.adorable.io/avatars/${size}/${name}.png`
}
