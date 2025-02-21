import React, { useState } from 'react'
import './App.css'
const App = () => {
  const [modal, setModal] = useState(false);
  const [offer, setOffer] = useState(false)
  const showModal = () => {
    setModal(true);
  }
  const handleClose = () => {
    setModal(false);
  }
  const handleOffer = () => {
    setOffer(true);
    setModal(false);
  }
  const handleOutside = (e) => {
    console.log(e.target.className);
    if (e.target.className == 'modelOuter') {
      setModal(false);
    }
  }
  return (
    <div>
      {!offer ? (<button onClick={showModal}>Show Offer</button>) : (<div>Offer Accepted!</div>)}

      {modal && <div className='modelOuter' onClick={handleOutside}>
        <div className='modal' style={{ border: "2px solid red" }}  >
          <button className='closeBtn' onClick={handleClose}>X</button>
          <p>Click the button below to accept my below offer!</p>
          <button onClick={handleOffer}>Accept offer!</button>
        </div>
      </div>}
    </div>
  )
}

export default App
