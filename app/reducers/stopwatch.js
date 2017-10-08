import { START, STOP, INCREMENT, RESET } from '../actions/stopwatch'

const initialState = {
  running: false,
  hours: 0,
  minutes: 0,
  seconds: 0
}

const setSeconds = prev => prev.seconds === 59 ? 0 : prev.seconds + 1

const setMinutes = prev => {
  if (prev.seconds !== 59) {
    return prev.minutes
  }
  if (prev.minutes === 59 && prev.seconds === 59) {
    return 0
  }
  return prev.minutes + 1
}

const setHours = prev => {
  if (prev.minutes === 59 && prev.seconds === 59) {
    return prev.hours + 1
  } else {
    return prev.hours
  }
}

const calculate = prev => {
  return {
    seconds: setSeconds(prev),
    minutes: setMinutes(prev),
    hours: setHours(prev)
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case START:
      return Object.assign({}, state, {
        running: true
      })
    case STOP:
      return Object.assign({}, state, {
        running: false
      })
    case INCREMENT:
      if (state.running === false) return state
      return Object.assign({}, state, {
        ...calculate(state)
      })
    case RESET:
      return Object.assign({}, state, {
        running: false
      })
    default:
      return state
  }
}
