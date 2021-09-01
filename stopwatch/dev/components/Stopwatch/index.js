import React from 'react';

import secondsToHms from '../../libs/libs.js'

const Stopwatch = ({secs, start, stop, wait, reset}) => {

  return (
    <>
      <div className="container">
        <div className="clock">
          <span className="clock__item">{secondsToHms(9005).hour}</span>
          <span className="clock__divider">:</span>
          <span className="clock__item">{secondsToHms(9005).min}</span>
          <span className="clock__divider">:</span>
          <span className="clock__item">{secondsToHms(9005).sec}</span>
        </div>
        <div className="clock-buttons">
          <button type="button" className="btn" onClick={start}>Start</button>
          <button type="button" className="btn" onClick={wait}>Wait</button>
          <button type="button" className="btn" onClick={reset}>Reset</button>
          <button type="button" className="btn" onClick={stop}>Stop</button>
        </div>
      </div>
    </>
  )
}

export default Stopwatch;