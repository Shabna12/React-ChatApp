import React, { useEffect, useState } from 'react'
import '../App.css'
import ChatLists from './ChatLists'
import InputText from './InputText'
import Userlogin from './Userlogin'
import socketIOClient from 'socket.io-client'


const ChatContainer = () => {
     
    const socketio = socketIOClient('https://chat-server-1-st8e.onrender.com/')
    const [user, setUser] = useState(localStorage.setItem('user', 'avatar'))
    const [chats, setChats] = useState([])

    useEffect (() => {
        socketio.on('chat', (chats) => {
           setChats(chats)
        })
        return () => {
            socketio.off('chat')
        }
    })
    
    const sendToSocket = (chat) => {
        socketio.emit('chat', chat)
    }

    const addMessage = (chat) => {
        const newChat = {...chat,user: localStorage.getItem('user'), avatar: localStorage.getItem('avatar')}
        setChats([...chats, newChat])
        sendToSocket([...chats, newChat])
    }

    // logout

    const Logout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("avatar")
        setUser('')
    }


  return (
    <>
      <div className='container-fluid'>
         {user ? (
             <div>
                 <div className='d-flex justify-content-between mt-2' style={{marginBottom:'20px'}}>
                     <h3> Username : {user}  </h3>
                     <p onClick={Logout} className='logout'> <span className='fw-bolder fs-4'>Logout</span> </p>
                 </div>
                 <ChatLists chats={chats} />
                 <InputText   addMessage= {addMessage}  />
             </div>
             ) : (
             <Userlogin  setUser={setUser}  /> )
            }
      </div>
    </>
  )
}

export default ChatContainer