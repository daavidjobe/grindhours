export const START = 'START'
export const STOP = 'STOP'
export const INCREMENT = 'INCREMENT'
export const RESET = 'RESET'

export const start = () => ({
  type: START
})

export const stop = () => ({
  type: STOP
})

export const increment = () => ({
  type: INCREMENT
})

export const reset = () => ({
  type: RESET
})
