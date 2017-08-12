import { integer } from './numbers';

let memorized = [];

const memorize = (value, {} = {}) => {
  if (!isMemorized(value))
    memorized.push(value);
  return value;
}

const isMemorized = (value, {} = {}) => {
  return memorized.includes(value);
}

const getOneMemorized = ({forget = false} = {}) => {
  const index = integer({max: memorized.length - 1});
  const value = memorized[index];
  if (forget)
    forgetOneMemorized(value);
  return value;
}

const getAllMemorized = ({forget = false} = {}) => {
  const array = [].concat(memorized);
  if (forget)
    exports.forgetAllMemorized();
  return array;
}

const forgetOneMemorized = (value, {} = {}) => {
  memorized = memorized.filter(v => v !== value);
}

const forgetAllMemorized = ({} = {}) => {
  memorized = [];
}

export { memorize, isMemorized, getOneMemorized, getAllMemorized, forgetOneMemorized, forgetAllMemorized };
