import { integer, boolean } from './numbers';

const fakeImageUrl = ({width = 640, height = 480, bg = '282828', fg = 'EAE0D0', text = 'Fake Image'} = {}) => {
  return `http://fakeimg.pl/${width}x${height}/${bg}/${fg}/?text=${text.replace(' ', '+')}`;
};

const realImageUrl = ({width = 640, height = 480, type = 'any', filter = ''} = {}) => {
  return `http://placeimg.com/${width}/${height}/${type}/${filter}`;
};

const avatarUrl = ({gender = ''} = {}) => {
  if (gender !== 'm' && gender !== 'f')
      gender = (boolean() ? 'm' : 'f');

  if (gender === 'f')
    return `https://randomuser.me/api/portraits/women/${integer({min:1, max: 99})}.jpg`;
  return `https://randomuser.me/api/portraits/men/${integer({min:1, max: 99})}.jpg`;
};


export { fakeImageUrl, realImageUrl, avatarUrl };
