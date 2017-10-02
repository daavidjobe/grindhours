import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import stopwatch from './stopwatch'

const rootReducer = combineReducers({
  router,
  stopwatch
})

export default rootReducer
