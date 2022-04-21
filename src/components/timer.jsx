import React, { useState, useRef } from 'react';

import './myapp.css';

export const Timers =()=>{
    const [timer, setTimer] = useState(120)
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const increment = useRef(null)

  const handleStart = () => {
    setIsActive(true)
    setIsPaused(true)
    increment.current = setInterval(() => {
      setTimer((timer) => {
        if(timer==0){
            clearInterval(increment.current);
            return 0;
        }  
       return timer -1
    });
    }, 1000)
  }

  const handlePause = () => {
    clearInterval(increment.current)
    setIsPaused(false)
  }

  const handleResume = () => {
    setIsPaused(true)
    increment.current = setInterval(() => {
      setTimer((timer) => timer - 1)
    }, 1000)
  }

  const handleReset = () => {
    clearInterval(increment.current)
    setIsActive(false)
    setIsPaused(false)
    setTimer(120)
  }

  const formatTime = () => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
   
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    // const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

    return `${getMinutes}m : ${getSeconds}s`
  }
    return(
        <div className="app">
          <h2>React Timer </h2>
          <div className='stopwatch-card'>
            <p>{formatTime()}</p>
            <div className='buttons'>
              {
                !isActive && !isPaused ?
                  <button style={{background:"blue",color:"black"}} onClick={handleStart}>Start</button>
                  : (
                    isPaused ? <button style={{background:"blue",color:"black"}} onClick={handlePause}>Stop</button> :
                      <button style={{background:"blue",color:"black"}} onClick={handleResume}>Start</button>
                  )
              }
              <button style={{color:"black"}}onClick={handleReset} disabled={!isActive}>Reset</button>
            </div>
          </div>
        </div>
      );

};