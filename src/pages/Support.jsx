
import React, { useEffect } from 'react'
import { Heart, Coffee, ShieldCheck, ExternalLink } from 'lucide-react'
import qrCodeImage from '../assets/qrcode.png' // Adjust path if necessary based on your file structure

const Support = () => {
  // Load PayPal SDK script dynamically on mount
  useEffect(() => {
    // Check if script is already injected to avoid duplicates
    if (document.getElementById('paypal-sdk-script')) return

    const script = document.createElement('script')
    script.id = 'paypal-sdk-script'
    script.src = 'https://www.paypal.com/sdk/js?client-id=BAAETJW9wMTEJVrtnmq2I4AuwrRJ6I9qfW6CVL3agcLiBmPMQRLZLQ1j_lTiItuqiBRQizxWDDfZhLHsPg&components=hosted-buttons&disable-funding=venmo&currency=USD'
    script.crossOrigin = 'anonymous'
    script.async = true
    document.body.appendChild(script)

    // Optional: cleanup script if component unmounts
    return () => {
      const existingScript = document.getElementById('paypal-sdk-script')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <div className='w-full max-w-xl mx-auto flex flex-col my-12 bg-[#1A1A1A] border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden p-8 text-neutral-200'>
      
      {/* Header */}
      <div className='text-center space-y-3 mb-8'>
        <div className='w-12 h-12 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-2xl flex items-center justify-center mx-auto'>
          <Heart className='w-6 h-6' />
        </div>
        <h1 className='text-xl font-bold tracking-wide text-white'>Support This Project</h1>
        <p className='text-xs text-neutral-400 max-w-md mx-auto leading-relaxed'>
          This platform is built independently to provide a quiet, anonymous venting space. If it brought you value, consider fueling its uptime and coffee supply.
        </p>
      </div>

      {/* Info Card */}
      <div className='bg-[#161616] border border-neutral-800 rounded-2xl p-5 space-y-4 mb-6'>
        <div className='flex items-start gap-3'>
          <Coffee className='w-5 h-5 text-amber-500 shrink-0 mt-0.5' />
          <div>
            <h2 className='text-sm font-semibold text-neutral-200'>Direct Contributions</h2>
            <p className='text-xs text-neutral-400 mt-0.5'>100% of contributions go directly toward server maintenance, domain costs, and future improvements.</p>
          </div>
        </div>
        <div className='flex items-start gap-3 pt-3 border-t border-neutral-800/60'>
          <ShieldCheck className='w-5 h-5 text-emerald-500 shrink-0 mt-0.5' />
          <div>
            <h2 className='text-sm font-semibold text-neutral-200'>Secure Global Processing</h2>
            <p className='text-xs text-neutral-400 mt-0.5'>Payments are handled securely through PayPal, supporting major international credit cards and local currencies.</p>
          </div>
        </div>
      </div>

      {/* QR Code Section */}
      <div className='bg-[#161616] border border-neutral-800 rounded-2xl p-6 flex flex-col items-center justify-center mb-6'>
        <h3 className='text-xs font-semibold text-neutral-300 mb-3'>Scan to Donate via Mobile</h3>
        <div className='bg-white p-3 rounded-xl shadow-md'>
          <img src={qrCodeImage} alt="PayPal QR Code" className='w-32 h-32 object-contain' />
        </div>
      </div>

      {/* PayPal Hosted Button Container */}
      <div className='bg-[#161616] border border-neutral-800 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[100px] space-y-4'>
        {/* SDK Render Target */}
        <div id="paypal-container-BAAETJW9wMTEJVrtnmq2I4AuwrRJ6I9qfW6CVL3agcLiBmPMQRLZLQ1j_lTiItuqiBRQizxWDDfZhLHsPg"></div>
      
        {/* Direct Fallback Link */}
        <a 
          href="https://www.paypal.com/ncp/payment/MR3M82EW7CB8A" 
          target="_blank" 
          rel="noopener noreferrer"
          className='text-xs text-rose-400 hover:text-rose-300 transition flex items-center gap-1.5 pt-2'
        >
          <span>Or click here to open PayPal checkout directly</span>
          <ExternalLink className='w-3.5 h-3.5' />
        </a>
      </div>

      <span className='block text-center text-[10px] text-neutral-500 mt-4'>
        Secure checkout powered by PayPal.
      </span>

    </div>
  )
}

export default Support

