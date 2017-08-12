import { integer } from './numbers';
import { list } from './utils';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt. ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor reprehenderit voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim est laborum.'
                .toLowerCase().split(/\s*[,. ]\s*/).filter(w => (w !== undefined && w.length > 0));

const loremWord = ({} = {}) => {
  return list({values: lorem});
};

const loremWords = ({min = 5, max = 15, sentence = false} = {}) => {
  let result = [];
  let count = Math.max(1, integer({min, max}));

  while (count > 0) {
    result.push(loremWord());
    count--;
  }

  result[0] = result[0][0].toUpperCase() + result[0].slice(1);

  return result.join(' ') + (sentence ? '.' : '');
};

const loremSentences = ({min = 2, max = 4} = {}) => {
  let result = [];
  let count = Math.max(1, integer({min, max}));

  while (count > 0) {
    result.push(loremWords({sentence: true}));
    count--;
  }

  return result.join(' ');
};

export { loremWord, loremWords, loremSentences };
