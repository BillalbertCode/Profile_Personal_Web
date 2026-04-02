import React from 'react'
import '../styles/DeprecationPage.css'

const DeprecationPage = () => {
  return (
    <div className="nextjs-layout">
      <main className="nextjs-content">
        <div className="nextjs-divider-horizontal" />
        
        <div className="nextjs-bottom-section">
          <p className="nextjs-message">
            ¡Hola! Qué gusto encontrarte en este lugar tan solitario. 
            Quiero informarte que he mudado de sitio y cambiado de portafolio, será un gusto verte allá.
            <a href="https://billalbertcode.vercel.app/" className="nextjs-link"> Visita el nuevo portafolio aquí.</a>
          </p>
          <div className="nextjs-image-wrapper">
            <img src="/bill/src/nos-mudamos.webp" alt="Nos mudamos" className="nextjs-image" />
          </div>
        </div>
      </main>
    </div>
  )
}

export default DeprecationPage
