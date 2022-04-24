import React from 'react'
import './ToastMessage.css';

const ToastMessage = ({toggleShown , message}) => {

  return (
    <div className="toast-container fade-in">
        {message}
        <button className="esc-btn" onClick={toggleShown}>X</button>
    </div>
  )
}

export default ToastMessage