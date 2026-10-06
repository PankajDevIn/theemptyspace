import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Chat from './Chat'

function App() {
  const [selectedMood, setSelectedMood] = useState(null)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home onSelectMood={setSelectedMood} />} />
        <Route path="/chat" element={<Chat selectedMood={selectedMood} />} />
      </Routes>
    </BrowserRouter>
  )
}
