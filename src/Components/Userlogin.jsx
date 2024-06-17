import React, { useState } from 'react'
import '../App.css'
import _ from 'lodash'


const Userlogin = ({setUser}) => {

    const [userName, setUserName] = useState()

    const handleUser = () => {
        if (!userName) return; 
        localStorage.setItem('user', userName)
        setUser(userName)
        localStorage.setItem('avatar', `https://picsum.photos/id/${_.random(1,100)}/200/300`)    
    }

  return (
    <>
      <div className="container mt-5 ">
        <div className='d-flex justify-content-center align-items-center'>
          <i className="fa-brands fa-rocketchat fa-2xl me-3" style={{color: 'black'}}></i>
          <p className='fw-bolder' style={{fontFamily:'"Ole", cursive', fontSize:'70px'}}>Hi - 5 Chatty</p>
        </div>
        <div className='d-flex justify-content-center align-items-center mt-5 login_form'>
            <input onChange={(e) => setUserName(e.target.value)} type="text" placeholder='Enter your name ' />
            <button onClick={handleUser} className='btn btn-primary ms-3 fw-bold'>Login</button>
        </div>
      </div>
    </>
  )
}

export default Userlogin