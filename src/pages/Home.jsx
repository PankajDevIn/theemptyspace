import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Heart, Frown, Flame, Trash2, ShieldAlert, HeartHandshake } from 'lucide-react'

const Home = ({ onSelectMood }) => {
  const navigate = useNavigate()
  
  // Your exact live production URL
  const siteUrl = "https://theemptyspace-chi.vercel.app"

  const handleCardClick = (moodKey, moodLabel) => {
    onSelectMood(moodKey)
    navigate('/chat', { state: { mood: moodLabel } })
  }

  // Structured Schema data matching your application profile
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "The Empty Space",
    "url": siteUrl,
    "description": "An invisible digital friend that listens. Express your feelings safely. Zero database tracking, no persistent logs, absolute client privacy.",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Stateless local data processing",
      "Zero log retention layout",
      "Client-side volatile browser memory execution",
      "Instant wipe session destruction"
    ],
    "author": {
      "@type": "Organization",
      "name": "The Empty Space Developers"
    }
  }

  return (
    <>
      <Helmet>
        <title>The Empty Space | Your Stateless Private Emotional Outlet</title>
        <meta name="description" content="An invisible digital friend that listens. Express your thoughts, sadness, or frustration safely. Zero database tracking, no persistent logs, absolute client privacy." />
        <meta property="og:title" content="The Empty Space - An Invisible Friend That Listens" />
        <meta property="og:description" content="No database logs. Whatever you express completely vanishes from memory the moment you exit." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <link rel="canonical" href={siteUrl} />
        
        {/* Dynamic Schema injection */}
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <div className='home w-full max-w-4xl mx-auto px-6 flex flex-col items-center text-white mt-10 relative min-h-[85vh]'>
        
        {/* Hero Header */}
        <div className='text-center space-y-4 mb-12'>
          <h1 className='text-4xl md:text-5xl text-green-400 lg:text-6xl font-extrabold tracking-tight'>
            An invisible friend that listens.
          </h1>
          <p className='text-sm md:text-base text-neutral-400 max-w-2xl mx-auto leading-relaxed'>
            No logs. No database. Whatever you write completely vanishes the moment you leave.
          </p>
        </div>

        {/* Emergency Service Disclaimer Notice */}
        <div className='w-full max-w-3xl bg-amber-500/10 border border-amber-500/20 rounded-2xl p-5 flex items-start gap-4 mb-12 shadow-lg'>
          <ShieldAlert className='w-6 h-6 text-amber-500 shrink-0 mt-1' />
          <p className='text-xs md:text-sm text-red-500 leading-relaxed'>
            <strong>Notice:</strong> This platform is an automated emotional outlet and is <strong>not an emergency crisis service</strong>. If you are experiencing a mental health emergency, please reach out to local emergency services immediately.
          </p>
        </div>

        {/* Mood Cards Grid */}
        <div className='w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20'>
          <button 
            onClick={() => handleCardClick('happy', 'Happy / Joy')}
            className='bg-[#1A1A1A] border border-neutral-800 hover:border-rose-500/50 p-8 rounded-3xl text-left transition-all duration-300 group hover:shadow-2xl hover:shadow-rose-500/10'
          >
            <div className='w-14 h-14 rounded-2xl bg-rose-500/10 text-rose-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform'>
              <Heart className='w-7 h-7' />
            </div>
            <h3 className='font-bold text-lg md:text-xl text-neutral-100 mb-2'>Happy / Joy</h3>
            <p className='text-xs md:text-sm text-neutral-400 leading-relaxed'>Share your wins, good news, or bright energy.</p>
          </button>

          <button 
            onClick={() => handleCardClick('sad', 'Sad / Heavy')} 
            className='bg-[#1A1A1A] border border-neutral-800 hover:border-blue-500/50 p-8 rounded-3xl text-left transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-500/10'
          >
            <div className='w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform'>
              <Frown className='w-7 h-7' />
            </div>
            <h3 className='font-bold text-lg md:text-xl text-neutral-100 mb-2'>Sad / Heavy</h3>
            <p className='text-xs md:text-sm text-neutral-400 leading-relaxed'>Let out tears, burdens, or heavy feelings safely.</p>
          </button>

          <button 
            onClick={() => handleCardClick('angry', 'Angry / Frustrated')} 
            className='bg-[#1A1A1A] border border-neutral-800 hover:border-purple-500/50 p-8 rounded-3xl text-left transition-all duration-300 group hover:shadow-2xl hover:shadow-purple-500/10'
          >
            <div className='w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform'>
              <Flame className='w-7 h-7' />
            </div>
            <h3 className='font-bold text-lg md:text-xl text-neutral-100 mb-2'>Angry / Frustrated</h3>
            <p className='text-xs md:text-sm text-neutral-400 leading-relaxed'>Venting your frustrations without filter or judgment.</p>
          </button>

          <button 
            onClick={() => handleCardClick('empty', 'Just Empty Yourself')} 
            className='bg-[#1A1A1A] border border-neutral-800 hover:border-emerald-500/50 p-8 rounded-3xl text-left transition-all duration-300 group hover:shadow-2xl hover:shadow-emerald-500/10'
          >
            <div className='w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform'>
              <Trash2 className='w-7 h-7' />
            </div>
            <h3 className='font-bold text-lg md:text-xl text-neutral-100 mb-2'>Just Empty Yourself</h3>
            <p className='text-xs md:text-sm text-neutral-400 leading-relaxed'>Clear out random thoughts from your mind.</p>
          </button>
        </div>

        {/* Floating Support Button */}
        <button
          onClick={() => navigate('/support')}
          className='fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 text-neutral-950 font-bold px-4 py-3 md:px-5 md:py-3.5 rounded-full shadow-lg shadow-green-500/20 transition-all duration-300 hover:scale-105 active:scale-95 group'
          title='Support us / Donate'
        >
          <HeartHandshake className='w-5 h-5 animate-pulse group-hover:scale-110 transition-transform' />
          <span className='text-xs md:text-sm tracking-wide'>Support Us</span>
        </button>

      </div>
    </>
  )
}

export default Home
