import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import ChatRoom from './ChatRoom'

function App() {
  const [selectedMood, setSelectedMood] = useState(null)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home onSelectMood={setSelectedMood} />} />
        <Route path="/chat" element={<ChatRoom selectedMood={selectedMood} />} />
      </Routes>
    </BrowserRouter>
  )
}
