import React from 'react'

const ShowTimer = ({hour,minute,second,isPaused,handleReset,handlePause,handleResume}) => {
    return (
        <div className="timer-wrapper">
            <div className='show-timer'>
                <div className='hour'>
                    <p >{hour < 10 ? `0${hour}` : hour}</p>
                    <span>:</span>
                </div>
                <div className='minute'>
                    <p>{minute < 10 ? `0${minute}` : minute}</p>
                    <span>:</span>
                </div>
                <div className='second'>
                    <p>{second < 10 ? `0${second}` : second}</p>
                </div>
            </div>
            <div className="action-btn">
                {!isPaused ? (<button onClick={handlePause}>Pause</button>) : (<button onClick={handleResume}>Resume</button>)}
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}

export default ShowTimer
