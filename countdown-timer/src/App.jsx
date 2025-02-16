import { useState } from 'react'
import './App.css'

function App() {
  const [isStart, setIsStart] = useState(false);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const handleChange = (e) => {
    const { id, value } = e.target;
    const numValue = parseInt(value);
  }
  const handleStart = () => {
    setIsStart(true);
  }
  const handleReset = ()=>{
    setIsStart(false);
  }
  const handleResume=()=>{

  }
  const handlePause=()=>{
    
  }
  return (
    <div className='countdown-wrapper'>
      <h2>Countdown timer</h2>
      {!isStart ? (<div className='timer_wrapper'>
        <input type="number" id='hour' placeholder='hour' onChange={handleChange} />
        <input type="number" id='minute' placeholder='minute' onChange={handleChange} />
        <input type="number" id="second" placeholder='second' onChange={handleChange} />
        <button onClick={handleStart}>Start</button>
      </div>)
        : (<div className="timer-wrapper">
          <div className='show-timer'>
            <div className='hour'>
              <p >{hour}</p>
              <span>:</span>
            </div>
            <div className='minute'>
              <p>{minute}</p>
              <span>:</span>
            </div>
            <div className='second'>
              <p>{second}</p>
            </div>
          </div>
          <div className="action-btn">
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleResume}>Resume</button>
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>)}
    </div>

  )
}

export default App
