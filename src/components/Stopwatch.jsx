import React, { useState, useRef } from 'react';

import './myapp.css';

export const StopWatch =()=>{
    const [timer, setTimer] = useState(3595)
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const increment = useRef(null)

  const handleStart = () => {
    setIsActive(true)
    setIsPaused(true)
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const handlePause = () => {
    clearInterval(increment.current)
    setIsPaused(false)
  }

  const handleResume = () => {
    setIsPaused(true)
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const handleReset = () => {
    clearInterval(increment.current)
    setIsActive(false)
    setIsPaused(false)
    setTimer(0)
  }

  const formatTime = () => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
   
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);
    // const msecods = `0${(timer/10)}`.slice(-2);

    
    return `${getHours}hr : ${getMinutes}m : ${getSeconds}s `
  }
    return(
        <div className="app">
          <h2>React Stopwatch </h2>
          <div className='stopwatch-card'>
            <p>{formatTime()}</p>
            <div className='buttons'>
              {
                !isActive && !isPaused ?
                  <button style={{background:"blue",color:"black"}}onClick={handleStart}>Start</button>
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