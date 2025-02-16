import { useEffect, useState } from 'react'
import './App.css'
import InputTimer from './components/InputTimer';
import ShowTimer from './components/ShowTimer';

function App() {
  const [isStart, setIsStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [timerId, setTimerId] = useState(0);
  const resetTimer = () => {
    setSecond(0);
    setMinute(0);
    setHour(0);
    clearInterval(tid);
  }
  const handleChange = (e) => {
    // console.log(e.target.value, e.target.id);
    const id = e.target.id;
    const value = parseInt(e.target.value);
    if (id === 'hour') {
      setHour(value)
    }
    else if (id === 'minute') {
      setMinute(value)
    } else {
      setSecond(value)
    }

  }
  const runTimer = (sec, min, hr, tid) => {
    if (sec > 0) {
      setSecond((s) => s - 1)
    }
    else if (sec == 0 && min > 0) {
      setMinute((m) => m - 1)
      setSecond(59);
    }
    else {
      setHour((h) => h - 1);
      setMinute(59);
      setSecond(59);
    }
    if (sec === 0 && min === 0 && hr === 0) {
      // resetTimer();
      handleReset();
      alert("Timer is finished");
      clearInterval(tid)
      return
    }
  }
  useEffect(() => {
    let tid;
    if (isStart) {
      tid = setInterval(() => {
        runTimer(second, minute, hour, tid)
      }, 1000)
      setTimerId(tid);
    }
    return () => {
      clearInterval(tid)
    }
  }, [isStart, hour, minute, second])
  const handleStart = () => {
    if (hour < 0 || minute < 0 || second <= 0) {
      alert("Invalid Input");
      return;
    } else {
      setIsStart(true);
    }

  }
  const handleResume = () => {
    setIsPaused(false);
    runTimer(second, minute, hour);
  }

  const handlePause = () => {
    setIsPaused(true);
    clearInterval(timerId);
  }
  const handleReset = () => {
    setIsStart(false);
    resetTimer();
  }

  return (
    <div className='countdown-wrapper'>
      <h2>Countdown timer</h2>
      {!isStart ? (<InputTimer handleStart={handleStart} handleChange={handleChange} />)
        : (<ShowTimer hour={hour} minute={minute} second={second} isPaused={isPaused} handleReset={handleReset}handlePause={handlePause} handleResume={handleResume} />)}
    </div>

  )
}

export default App
