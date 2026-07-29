import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, ShieldCheck, HelpCircle } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='w-full max-w-4xl mx-auto px-6 mt-auto border-t border-neutral-900 bg-transparent py-8 text-neutral-500 text-xs md:text-sm flex flex-col sm:flex-row items-center justify-between gap-4'>
      
      {/* Branding and Architecture Disclaimer */}
      <div className='flex items-center gap-1.5 font-medium text-neutral-400'>
        <ShieldCheck className='w-4 h-4 text-green-400 shrink-0' />
        <span>Stateless Client Platform</span>
        <span className='text-neutral-700'>|</span>
        <span className='text-neutral-500 font-mono text-[11px]'>&copy; {currentYear}</span>
      </div>

      {/* Structured Navigation Links */}
      <div className='flex items-center gap-6 font-medium text-neutral-400'>
        <Link 
          to="/" 
          className='hover:text-green-400 transition-colors flex items-center gap-1'
        >
          Space
        </Link>
        
        <Link 
          to="/about" 
          className='hover:text-green-400 transition-colors flex items-center gap-1'
        >
          <HelpCircle className='w-3.5 h-3.5 text-neutral-500' /> About
        </Link>

        <Link 
          to="/privacy" 
          className='hover:text-green-400 transition-colors flex items-center gap-1'
        >
          <Heart className='w-3.5 h-3.5 text-rose-500/80' /> Privacy
        </Link>
        
        <Link 
          to="/support" 
          className='hover:text-emerald-400 text-emerald-500 transition-colors font-bold'
        >
          Donate
        </Link>
      </div>

    </footer>
  )
}

export default Footer
