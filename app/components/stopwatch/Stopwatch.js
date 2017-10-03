import React, { Component } from 'react'
import { padded } from '../../helpers/time'

export default class Stopwatch extends Component {
  state = {
    interval: undefined
  }

  start = () => {
    let { interval } = this.state
    if (interval) {
      return
    }
    this.props.start()
    interval = setInterval(() => {
      this.props.increment()
    }, 1000)
    this.setState({ interval })
  }

  stop = () => {
    clearInterval(this.state.interval)
    this.props.stop()
    this.setState({
      interval: undefined
    })
  }

  render () {
    const { clock } = this.props.stopwatch
    return (
      <div>
        <div>
          {`${padded(clock.hours)}:${padded(clock.minutes)}:${padded(clock.seconds)}`}
        </div>
        <button onClick={this.start}>start</button>
        <button onClick={this.stop}>stop</button>
      </div>
    )
  }
}
