import { START, STOP, INCREMENT, RESET } from '../actions/stopwatch'

const initialState = {
  running: false,
  clock: {
    hours: 0,
    minutes: 0,
    seconds: 0
  }
}

const time = () => new Date().getTime()

const calculate = prev => {
  const diff = new Date(time() - prev)
  const seconds = diff.getSeconds() 
  const minutes = diff.getMinutes() 
  const hours = diff.getHours() - 1 
  return {
    seconds,
    minutes,
    hours
  }
}
// TODO: add increment logic to component
// re-implment these actions
// make the clock object flat

export default (state = initialState, action) => {
  switch (action.type) {
    case START:
      return Object.assign({}, state, {
        running: true,
        startTime: state.startTime ? state.startTime : time()
      })
    case STOP:
      return Object.assign({}, state, {
        running: false,
        stopTime: time()
      })
    case INCREMENT:
      const prev = state.stopTime ? state.stopTime : state.startTime
      return Object.assign({}, state, {
        clock: calculate(prev || 0)
        stopTime: undefined
      })
    case RESET:
      return Object.assign({}, state, {
        clock: { hours: 0, minutes: 0, seconds: 0 },
        running: false,
        startTime: undefined,
        stopTime: undefined
      })
    default:
      return state
  }
}
