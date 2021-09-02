import React from 'react';

import secondsToHms from '../../libs/libs.js'

const Stopwatch = ({secs, startStop, wait, reset}) => {

  return (
    <>
      <div className="container">
        <div className="clock">
          <span className="clock__item">{secondsToHms(secs).hour}</span>
          <span className="clock__divider">:</span>
          <span className="clock__item">{secondsToHms(secs).min}</span>
          <span className="clock__divider">:</span>
          <span className="clock__item">{secondsToHms(secs).sec}</span>
        </div>
        <div className="clock-buttons">
          <button type="button" className="btn" onClick={startStop}>Start / Stop</button>
          <button type="button" className="btn" onClick={wait}>Wait</button>
          <button type="button" className="btn" onClick={reset}>Reset</button>
          {/* <button type="button" className="btn" onClick={stop}>Stop</button> */}
        </div>
      </div>
    </>
  )
}

export default Stopwatch;