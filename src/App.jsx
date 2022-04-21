import React, { useState, useRef } from 'react';
import {StopWatch} from "./components/Stopwatch";
import {Timers} from "./components/timer"
import {Header} from "./components/header";
import { Route, Routes } from 'react-router-dom';
import './App.css';



const App = () => {
 

  return (
    
    <div className="app">
     <div> <Header/></div>
     <Routes>
     <Route  path="/stopwatch" element={<Timers  />}></Route>
      <Route path="/timer" element={<StopWatch />}></Route>
       </Routes> 
    
    
    </div>
  );
}
export default App
