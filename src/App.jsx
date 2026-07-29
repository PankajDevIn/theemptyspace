
import { useState, useEffect } from 'react'
import io from 'socket.io-client'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './component/Navbar'
import ChatRoom from './pages/ChatRoom'
import Support from './pages/Support'
// Connects to your backend server
const socket = io('http://localhost:5000')

function App() {
  const [selectedMood, setSelectedMood] = useState(null)
  const [roomId, setRoomId] = useState('')
  const [messages, setMessages] = useState([])
  const [text, setText] = useState('')
  const [showSupportModal, setShowSupportModal] = useState(false)

  useEffect(() => {
    socket.on('load_messages', (msgs) => setMessages(msgs))
    socket.on('receive_message', (msgs) => setMessages(msgs))

    return () => {
      socket.off('load_messages')
      socket.off('receive_message')
    }
  }, [])

  const handleSelectMood = (mood) => {
    setSelectedMood(mood)
    const randomRoom = `${mood}-${Math.random().toString(36).substring(2, 8)}`
    setRoomId(randomRoom)
    socket.emit('join_room', randomRoom)
  }

  const handleSend = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    socket.emit('send_message', { roomId, message: text })
    setText('')
  }

  const handleLeave = () => {
    socket.emit('leave_room', roomId)
    setSelectedMood(null)
    setRoomId('')
    setMessages([])
  }

  return (
    <>
      <BrowserRouter>
        <Navbar setShowSupportModal={setShowSupportModal} />
        <Routes>
          <Route path="/" element={<Home onSelectMood={handleSelectMood} />} />
          <Route 
            path="/chat" 
            element={
              <ChatRoom 
                selectedMood={selectedMood}
                messages={messages}
                text={text}
                setText={setText}
                handleSend={handleSend}
                handleLeave={handleLeave}
              />
            } 
          />

          <Route path="/support" element={<Support />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
