import React from 'react'
import { useNavigate } from 'react-router-dom'
import { EyeOff, ServerCrash, ShieldCheck, HeartHandshake, ArrowLeft } from 'lucide-react'

const Aboutus = () => {
  const navigate = useNavigate()

  return (
    <div className='w-full max-w-4xl mx-auto px-6 py-12 text-slate-700  min-h-[85vh] flex flex-col justify-center animate-fadeIn'>
      
      {/* Back Navigation Action */}
      <div className='mb-8'>
        <button 
          onClick={() => navigate('/')} 
          className='flex items-center gap-2 text-xs md:text-sm text-neutral-400 hover:text-green-400 transition-colors group font-medium'
        >
          <ArrowLeft className='w-4 h-4 group-hover:-translate-x-1 transition-transform' /> Back to Space
        </button>
      </div>

      {/* Header Introduction */}
      <div className='space-y-4 mb-16'>
        <span className='text-xs uppercase font-extrabold tracking-widest text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20'>
          Our Philosophy
        </span>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mt-3 bg-gradient-to-r from-neutral-100 to-neutral-400 bg-clip-text '>
          A digital space designed to forget.
        </h1>
        <p className='text-sm md:text-base text-neutral-400 max-w-2xl leading-relaxed'>
          Most of the internet is obsessed with tracking, logging, and keeping your attention. We built a platform that does the exact opposite. This is a quiet corner for your mind to decompress without a digital shadow following you.
        </p>
      </div>

      {/* Philosophy Grid Points */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-16'>
        
        {/* Card 1 */}
        <div className='bg-[#1A1A1A] border border-neutral-800 p-6 rounded-2xl space-y-4 shadow-xl'>
          <div className='w-12 h-12 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center'>
            <EyeOff className='w-6 h-6' />
          </div>
          <h3 className='font-bold text-lg text-neutral-100'>Absolute Privacy</h3>
          <p className='text-xs md:text-sm text-neutral-400 leading-relaxed'>
            We don't track your identity, your location, or your text. Your expressions stay completely isolated to you.
          </p>
        </div>

        {/* Card 2 */}
        <div className='bg-[#1A1A1A] border border-neutral-800 p-6 rounded-2xl space-y-4 shadow-xl'>
          <div className='w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center'>
            <ServerCrash className='w-6 h-6' />
          </div>
          <h3 className='font-bold text-lg text-neutral-100'>No Database</h3>
          <p className='text-xs md:text-sm text-neutral-400 leading-relaxed'>
            There is no hidden storage. Messages are saved strictly inside temporary browser states. When the state dies, the data dies.
          </p>
        </div>

        {/* Card 3 */}
        <div className='bg-[#1A1A1A] border border-neutral-800 p-6 rounded-2xl space-y-4 shadow-xl'>
          <div className='w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center'>
            <ShieldCheck className='w-6 h-6' />
          </div>
          <h3 className='font-bold text-lg text-neutral-100'>Pure Catharsis</h3>
          <p className='text-xs md:text-sm text-neutral-400 leading-relaxed'>
            This platform acts as a digital piece of paper. Write your deepest frustrations, clear your mind, and let it safely burn away.
          </p>
        </div>

      </div>

      {/* Call To Action Box */}
      <div className='bg-gradient-to-b from-[#161616] to-[#121212] border border-neutral-800 p-8 rounded-3xl text-center space-y-4 shadow-2xl relative overflow-hidden'>
        <div className='absolute inset-0 bg-green-500/5 blur-3xl pointer-events-none' />
        <h2 className='text-xl md:text-2xl font-bold text-neutral-100'>Help Keep This Project Alive</h2>
        <p className='text-xs md:text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed'>
          Because we host everything serverless on frontend infrastructures, keeping this framework accessible is free. However, development effort keeps expanding. Consider donating if this space helped your mental clarity.
        </p>
        <button
          onClick={() => navigate('/support')}
          className='inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 text-neutral-950 font-bold px-6 py-3 rounded-full text-xs md:text-sm transition-transform duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-green-500/10'
        >
          <HeartHandshake className='w-4 h-4' /> Support Our Mission
        </button>
      </div>

    </div>
  )
}

export default Aboutus
