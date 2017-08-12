import { integer } from './numbers';

const timestamp = ({min = (Date.now() - (365*24*60*60*1000)), max = Date.now()} = {}) => {
  return integer({min, max});
};

export { timestamp };
