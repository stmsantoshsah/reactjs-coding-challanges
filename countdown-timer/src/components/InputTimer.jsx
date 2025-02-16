import React from 'react'

const InputTimer = ({handleChange,handleStart}) => {
    return (
        <div className='timer_wrapper'>
            <input type="number" id='hour' placeholder='HH' onChange={handleChange} />
            <input type="number" id='minute' placeholder='MM' onChange={handleChange} />
            <input type="number" id="second" placeholder='SS' onChange={handleChange} />
            <button onClick={handleStart}>Start</button>
        </div>
    )
}

export default InputTimer
