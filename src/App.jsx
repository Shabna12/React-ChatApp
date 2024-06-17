import { useState } from 'react'
import './App.css'
import Userlogin from './Components/Userlogin'
import ChatContainer from './Components/ChatContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <ChatContainer/>
      </div>
     
    </>
  )
}

export default App
