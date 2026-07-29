import React, { useState } from 'react'
import { Sparkles, Menu, X, Heart } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ setShowSupportModal }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleNavClick = (path) => {
    navigate(path)
    setMenuOpen(false)
  }

  const handleSupportClick = () => {
    navigate('/support')
    setMenuOpen(false)
    
    // If you want support to open a modal instead of a route page, uncomment below:
    // setShowSupportModal(true)
  }

  return (
    <nav className='navbar w-full h-20 flex justify-between items-center px-6 md:px-12 lg:px-20 bg-[#1A1A1A] text-white border-b border-neutral-800 relative z-50'>
      
      {/* Brand Logo */}
      <div 
        onClick={() => handleNavClick('/')} 
        className='text-base md:text-lg font-bold tracking-tight flex items-center gap-2 cursor-pointer'
      >
        <Sparkles className='w-5 h-5 text-rose-500' /> Empty Space
      </div>

      {/* Desktop Menu Links */}
      <div className='hidden md:flex items-center gap-6 lg:gap-8'>
        <button 
          onClick={() => handleNavClick('/about')} 
          className='text-xs lg:text-lg text-neutral-300 hover:text-white transition'
        >
          About Us
        </button>
        <button 
          onClick={() => handleNavClick('/privacy')} 
          className='text-xs lg:text-lg text-neutral-300 hover:text-white transition'
        >
          Privacy Policy
        </button>
        <button 
          onClick={handleSupportClick} 
          className='text-xs lg:text-lg text-rose-400 hover:text-rose-300 transition flex items-center gap-1.5'
        >
          <Heart className='w-4 h-4' /> Support Us
        </button>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className='flex md:hidden relative'>
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className='p-2 text-neutral-300 hover:text-white transition rounded-lg hover:bg-neutral-800'
          aria-label='Toggle Menu'
        >
          {menuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
        </button>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className='absolute right-0 top-14 w-48 bg-[#222222] border border-neutral-800 rounded-xl shadow-2xl py-2 flex flex-col'>
            <button 
              onClick={() => handleNavClick('/about')} 
              className='w-full text-left px-4 py-2.5 text-xs text-neutral-300 hover:bg-neutral-800 transition'
            >
              About Us
            </button>
            <button 
              onClick={() => handleNavClick('/privacy')} 
              className='w-full text-left px-4 py-2.5 text-xs text-neutral-300 hover:bg-neutral-800 transition'
            >
              Privacy Policy
            </button>
            <button 
              onClick={handleSupportClick} 
              className='w-full text-left px-4 py-2.5 text-xs text-rose-400 hover:bg-neutral-800 transition flex items-center gap-1.5'
            >
              <Heart className='w-3.5 h-3.5' /> Support Us
            </button>
          </div>
        )}
      </div>

    </nav>
  )
}

export default Navbar