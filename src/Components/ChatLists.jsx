import React from 'react'
import '../App.css'


const ChatLists = ({chats}) => {

    const user = localStorage.setItem('user','avatar')


    function SenderChat ({message, avatar}) {
        return (
            <div className='chat_sender'>
                <img src={avatar} alt="" />
                <p className='sender'>
                    {message}
                </p>
            </div>
        )
    }

    function ReceiverChat ({message, avatar}) {
        return (
            <div className='chat_receiver'>
                <img src={avatar} alt="" />
                <p className='receiver'>
                    {message}
                </p>
            </div>
        )
    }



  return (
    <>
      <div className="container-fluid chats_list">
         {
            chats.map((chat,index) => {
                if (chat.user === user) {
                    return (<SenderChat key = {index} message = {chat.message} username = {chat.user} avatar = {chat.avatar} />)
                } else {
                    return (<ReceiverChat key = {index} message = {chat.message} username = {chat.user} avatar = {chat.avatar}  /> )
                }
            })
         }
      </div>
    </>
  )
}

export default ChatLists