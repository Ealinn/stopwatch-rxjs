import React from 'react';

const Stopwatch = ({secs, start, stop, wait, reset}) => {

  return (
    <>
      <div className="container">
        <div className="clock">
          <span className="clock__item">00</span>
          <span className="clock__divider">:</span>
          <span className="clock__item">00</span>
          <span className="clock__divider">:</span>
          <span className="clock__item">00</span>
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