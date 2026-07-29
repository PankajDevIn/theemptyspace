import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './component/Navbar'
import ChatRoom from './pages/ChatRoom'
import Support from './pages/Support'

function App() {
  const [selectedMood, setSelectedMood] = useState(null)
  const [messages, setMessages] = useState([])
  const [text, setText] = useState('')
  const [showSupportModal, setShowSupportModal] = useState(false)

  // Triggered when a user selects a mood on the Home page
  const handleSelectMood = (mood) => {
    setSelectedMood(mood)
    setMessages([]) // Ensure the screen starts completely empty
  }

  // Handles adding messages instantly into localized browser memory
  const handleSend = (e) => {
    e.preventDefault()
    if (!text.trim()) return

    const newMessage = {
      id: Date.now(),
      text: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    setMessages((prevMessages) => [...prevMessages, newMessage])
    setText('')
  }

  // Wipes all text logs permanently instantly when they leave the session
  const handleLeave = () => {
    setSelectedMood(null)
    setMessages([])
    setText('')
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
