import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, ShieldCheck, DatabaseZap, EyeOff, KeyRound } from 'lucide-react'

const PrivacyPolicy = () => {
  const navigate = useNavigate()
  const lastUpdatedDate = "July 2026"

  return (
    <div className='w-full max-w-3xl mx-auto px-6 py-12 text-white min-h-[85vh] flex flex-col justify-center animate-fadeIn '>
      
      {/* Back Navigation Bar Action */}
      <div className='mb-8'>
        <button 
          onClick={() => navigate('/')} 
          className='flex items-center gap-2 text-xs md:text-sm text-neutral-400 hover:text-green-400 transition-colors group font-medium'
        >
          <ArrowLeft className='w-4 h-4 group-hover:-translate-x-1 transition-transform' /> Return to App
        </button>
      </div>

      {/* Policy Page Header */}
      <div className='border-b border-neutral-800 pb-6 mb-10'>
        <h1 className='text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-neutral-100 to-neutral-400 bg-clip-text text-transparent'>
          Privacy Policy
        </h1>
        <p className='text-xs text-neutral-500 mt-2 font-mono'>
          Last updated: {lastUpdatedDate} | Deployment Architecture: 100% Stateless Client-Side
        </p>
      </div>

      {/* Core Privacy Pillar Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10'>
        <div className='bg-[#161616] border border-neutral-800/60 p-4 rounded-xl flex items-start gap-3'>
          <DatabaseZap className='w-5 h-5 text-green-400 shrink-0 mt-0.5' />
          <div>
            <h4 className='text-xs font-bold text-neutral-200 uppercase tracking-wider'>Zero Log Retention</h4>
            <p className='text-xs text-neutral-400 mt-1 leading-relaxed'>No tracking endpoints or persistent backend servers are mounted to capture user logs.</p>
          </div>
        </div>
        <div className='bg-[#161616] border border-neutral-800/60 p-4 rounded-xl flex items-start gap-3'>
          <EyeOff className='w-5 h-5 text-rose-400 shrink-0 mt-0.5' />
          <div>
            <h4 className='text-xs font-bold text-neutral-200 uppercase tracking-wider'>Local Volatile Memory</h4>
            <p className='text-xs text-neutral-400 mt-1 leading-relaxed'>Data arrays survive strictly inside React state hooks. Exiting or refreshing purges the cache.</p>
          </div>
        </div>
      </div>

      {/* Document Legal Sections Breakdown */}
      <div className='space-y-8 text-sm leading-relaxed text-neutral-300'>
        
        {/* Section 1 */}
        <section className='space-y-2.5'>
          <h3 className='text-base font-bold text-neutral-600 flex items-center gap-2'>
            <span className='text-xs font-mono text-green-400 bg-green-500/10 px-2 py-0.5 rounded'>1.0</span> 
            Information We Do Not Collect
          </h3>
          <p className='text-neutral-400 text-xs md:text-sm pl-7'>
            Unlike traditional platforms, we intentionally chose not to incorporate a registration engine, email tracking form, database storage server, or cookies. When you express thoughts inside our application channels, your phrases are processed locally inside your web browser container.
          </p>
        </section>

        {/* Section 2 */}
        <section className='space-y-2.5'>
          <h3 className='text-base font-bold text-neutral-600 flex items-center gap-2'>
            <span className='text-xs font-mono text-green-400 bg-green-500/10 px-2 py-0.5 rounded'>2.0</span> 
            Data Transit Security & Serverless Execution
          </h3>
          <p className='text-neutral-400 text-xs md:text-sm pl-7'>
            Our environment is hosted statically through distributed client delivery nodes. No real-time server streams (such as Socket protocols) interact with your entries. This layout guarantees that your texts are structurally impossible to capture, intercept, or sell by anyone—including the network administrator.
          </p>
        </section>

        {/* Section 3 */}
        <section className='space-y-2.5'>
          <h3 className='text-base font-bold text-neutral-600 flex items-center gap-2'>
            <span className='text-xs font-mono text-green-400 bg-green-500/10 px-2 py-0.5 rounded'>3.0</span> 
            How Your Inputs Vanish
          </h3>
          <p className='text-neutral-400 text-xs md:text-sm pl-7'>
            All chat room content models live exclusively inside your browser's volatile computer memory stack (RAM). Closing your session browser window tab, refreshing the interface loop, or engaging the explicit <strong>"Leave & Wipe"</strong> action immediately deallocates the local variable pointer arrays, rendering recovery completely impossible.
          </p>
        </section>

        {/* Section 4 */}
        <section className='space-y-2.5'>
          <h3 className='text-base font-bold text-neutral-400 flex items-center gap-2'>
            <span className='text-xs font-mono text-green-600 bg-green-500/10 px-2 py-0.5 rounded'>4.0</span> 
            Third-Party Infrastructure
          </h3>
          <p className='text-neutral-400 text-xs md:text-sm pl-7'>
            This interface application code is compiled and hosted serverless via deployment architecture providers. While they track basic networking metrics (such as routing bandwidth allocations or edge asset speeds), no conversational content logs pass through their systems.
          </p>
        </section>

      </div>

      {/* Safety Compliance Footer Badge */}
      <div className='mt-12 pt-6 border-t border-neutral-900 flex justify-center'>
        <div className='inline-flex items-center gap-2 text-[11px] font-mono text-neutral-500 tracking-wide uppercase bg-neutral-900 px-4 py-2 rounded-full border border-neutral-800'>
          <KeyRound className='w-3.5 h-3.5 text-green-400 animate-pulse' /> Privacy Verified Client Environment
        </div>
      </div>

    </div>
  )
}

export default PrivacyPolicy
