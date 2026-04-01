import React from 'react'
import '../styles/DeprecationBanner.css'

const DeprecationBanner = () => {
  return (
    <div className="deprecation-banner">
      <div className="deprecation-banner-content">
        <span>⚠️ Este sitio web está deprecado. Visita mi nuevo portafolio: </span>
        <a 
          href="https://billalbertcode.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          billalbertcode.vercel.app
        </a>
      </div>
    </div>
  )
}

export default DeprecationBanner
