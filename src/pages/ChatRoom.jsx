
import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Send, LogOut, MessageSquareOff } from 'lucide-react'

const ChatRoom = ({ selectedMood, messages, text, setText, handleSend, handleLeave }) => {
  const navigate = useNavigate()
  const location = useLocation()

  // Fallback to router state or prop if selectedMood is missing on direct refresh
  const currentMood = selectedMood || location.state?.mood || 'General Space'

  const onLeaveClick = () => {
    handleLeave()
    navigate('/')
  }

  return (
    <div className='w-full max-w-2xl mx-auto flex flex-col h-[80vh] bg-[#1A1A1A] border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden'>
      
      {/* Chat Header */}
      <div className='bg-[#161616] border-b border-neutral-800 px-6 py-4 flex justify-between items-center'>
        <div>
          <span className='text-xs uppercase font-bold tracking-widest text-rose-400'>
            Mode: {currentMood}
          </span>
          <p className='text-xs text-neutral-400 flex items-center gap-1.5 mt-0.5'>
            <MessageSquareOff className='w-3.5 h-3.5 text-amber-500' /> Data wipes instantly on exit
          </p>
        </div>
        <button 
          onClick={onLeaveClick} 
          className='flex items-center gap-1.5 text-xs bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 px-3.5 py-2 rounded-xl transition font-medium'
        >
          <LogOut className='w-4 h-4' /> Leave & Wipe
        </button>
      </div>

      {/* Messages Feed Area */}
      <div className='flex-1 overflow-y-auto p-6 space-y-4'>
        {messages.length === 0 ? (
          <div className='h-full flex flex-col items-center justify-center text-center text-neutral-500 space-y-2'>
            <p className='text-sm'>Your empty space is open.</p>
            <p className='text-xs text-neutral-600'>Type whatever is on your mind. No one else is here.</p>
          </div>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className='bg-[#222222] border border-neutral-800 rounded-2xl p-4 shadow-inner max-w-lg'>
              <p className='text-neutral-200 text-sm md:text-base whitespace-pre-wrap leading-relaxed'>{msg.text}</p>
              <span className='block text-[10px] text-neutral-500 text-right mt-2'>{msg.time}</span>
            </div>
          ))
        )}
      </div>

      {/* Message Input Form */}
      <form onSubmit={handleSend} className='bg-[#161616] border-t border-neutral-800 p-4 flex gap-3'>
        <input
          type='text'
          placeholder='Type your thoughts into the empty space...'
          value={text}
          onChange={(e) => setText(e.target.value)}
          className='flex-1 bg-[#1A1A1A] border border-neutral-800 rounded-2xl px-5 py-3.5 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-rose-500'
          maxLength={500}
        />
        <button 
          type='submit' 
          className='bg-rose-600 hover:bg-rose-500 text-white px-6 py-3.5 rounded-2xl transition flex items-center justify-center shadow-lg shadow-rose-600/20'
        >
          <Send className='w-4 h-4' />
        </button>
      </form>

    </div>
  )
}

export default ChatRoom

