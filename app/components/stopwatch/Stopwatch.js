import React, { Component } from 'react'
import { padded, clockTimer } from '../../helpers/time'

// TODO: Make a function out of this

export default class Stopwatch extends Component {
  
  static tick = () => {}

  start = () => {
    this.props.start()
    this.update.clear = false
    Stopwatch.tick = clockTimer(this.update)
  }

  stop = () => {
    this.props.stop()
    clearTimeout(Stopwatch.tick)
    this.update.clear = true
  }

  update = () => {
    this.props.increment()
  }

  render () {
    const { hours, minutes, seconds } = this.props.stopwatch
    return (
      <div>
        <div>
          {`${padded(hours)}:${padded(minutes)}:${padded(seconds)}`}
        </div>
        <button onClick={this.start}>start</button>
        <button onClick={this.stop}>stop</button>
      </div>
    )
  }
}
