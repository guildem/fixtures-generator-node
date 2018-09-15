export function bool(percent = 0.5) {
  return (Math.random() > percent)
}
export const boolean = bool

export function float({min = 0, max = 1} = {}) {
  if (max < min) max = min
  return Math.random() * (max - min) + min
}
export const number = float

export function fixed({min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER, decimals = 2} = {}) {
  return float({min, max}).toFixed(decimals)
}

export function int({min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER} = {}) {
  min = Math.ceil(min)
  max = Math.floor(max) + 1
  return Math.floor(float({min, max}))
}
export const integer = int
