import React, { useState } from 'react'
import '../App.css'

const InputText = ({addMessage}) => {

    const [message, setMessage] = useState()

    const handleInputChange = (e) => {
        setMessage(e.target.value)
    }

    const sendMessage = () => {
        addMessage({message})
        setMessage("")
    }


  return (
    <>
      <div className="container d-flex align-items-center inputtext_container">
         < textarea name="message" id="message" placeholder='Type the message..' rows={3} onChange={handleInputChange} />
         <button onClick={sendMessage} className='btn fw-bold'> Send </button>
      </div>
    </>
  )
}

export default InputText