import React, { useState, useEffect } from 'react';
import { interval, fromEvent } from 'rxjs';
import {
  map,
  buffer,
  debounceTime,
  filter,
} from 'rxjs/operators';

import Stopwatch from '../Stopwatch';

const App = () => {
  const [secs, changeSecs] = useState(0);
  const [state, changeState] = useState('stop');

  const click$ = fromEvent(document, 'click');

  const start = () => {
    changeState('start');
  }

  const reset = () => {
    changeSecs(0);
  }

  const stop = () => {
    changeSecs(0);
    changeState('stop');
  }

  const startStop = () => {
    if (state === 'start') {
      stop();
    } else {
      start();
    }
  }

  const wait = () => {
    const doubleClick$ = click$.pipe(
      buffer(click$.pipe(debounceTime(300))),
      map(list => list.length),
      filter(x => x >= 2)
    );

    doubleClick$.subscribe(() => {
      changeState('wait');
    });
  }

  useEffect(()=>{
    if (state == 'stop') {
      return;
    }

    const timer$ = interval(1000);

    const sub$ = timer$
      .subscribe({
        next: () => {
          if (state == 'start') {
            changeSecs((prev) => prev + 1);
          }
        }
      });

    return (() => {
      sub$.unsubscribe();
    });
  }, [state]);

  return (
    <>
      <Stopwatch 
        secs={secs}
        startStop={startStop}
        wait={wait}
        reset={reset}
      />
    </>
  )
}

export default App;