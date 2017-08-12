const float = ({min = 0, max = 1} = {}) => {
  return Math.random() * (max - min) + min;
};

const fixed = ({min = 0, max = Number.MAX_SAFE_INTEGER, decimals = 2} = {}) => {
  return float({min, max}).toFixed(decimals);
};

const integer = ({min = 0, max = Number.MAX_SAFE_INTEGER} = {}) => {
  min = Math.ceil(min);
  max = Math.floor(max) + 1;
  return Math.floor(float({min, max}));
};

const boolean = ({percent = 0.5} = {}) => {
  return (Math.random() > percent);
};

export { float, fixed, integer, boolean };
