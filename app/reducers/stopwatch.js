import { START, STOP, INCREMENT } from '../actions/stopwatch'

const initialState = {
  running: false,
  clock: {
    hours: 0,
    minutes: 0,
    seconds: 0
  }
}

const time = () => new Date().getTime()

const calculate = ({ clock }, prev) => {
  const diff = new Date(time() - prev)
  const seconds = diff.getSeconds() 
  const minutes = diff.getMinutes() 
  const hours = diff.getHours() - 1 
  console.log(`${hours}:${minutes}:${seconds}`)
  return {
    seconds,
    minutes,
    hours
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case START:
      if (state.running === true) {
        return
      }
      return Object.assign(state, {
        running: true,
        startTime: time()
      })
    case STOP:
      if (!state.running) {
        return
      }
      return Object.assign(state, {
        running: false,
        startTime: undefined
      })
    case INCREMENT:
      return Object.assign(state, {
        clock: calculate(state, state.startTime || 0)
      })
    default:
      return state
  }
}
