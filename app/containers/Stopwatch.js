import { connect } from 'react-redux'
import { start, stop, increment } from '../actions/stopwatch'
import Stopwatch from '../components/stopwatch/Stopwatch'

const mapStateToProps = ({ stopwatch }) => {
  return {
    stopwatch
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    start: () => {
      dispatch(start())
    },
    stop: () => {
      dispatch(stop())
    },
    increment: () => {
      dispatch(increment())
    }
  }
}

const s = connect(
  mapStateToProps,
  mapDispatchToProps
)(Stopwatch)

export default s
