import React, { useState, useEffect } from 'react';
import { Observable, Subject } from 'rxjs';
import {
  map,
  buffer,
  debounceTime,
  filter,
  takeUntil,
} from 'rxjs/operators';

import Stopwatch from '../Stopwatch';

const App = () => {


  return (
    <>
      <Stopwatch 
        // secs={secs}
        // start={start}
        // stop={stop}
        // wait={wait}
        // reset={reset}
      />
    </>
  )
}

export default App;