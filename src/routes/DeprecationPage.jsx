import React from 'react'
import '../styles/DeprecationPage.css'

const DeprecationPage = () => {
  return (
    <div className="deprecation-page">
      <div className="deprecation-content">
        <h1 className="deprecation-title">¡Hola! Qué gusto encontrarte en este lugar desolado.</h1>
        <p className="deprecation-message">
          Quiero informarte que hemos mudado de sitio y cambiado de portafolio, será un gusto verte allá.
        </p>
        <div className="deprecation-image-container">
          {/* Espacio para la imagen o GIF que el usuario proporcionará */}
          <div className="deprecation-image-placeholder">
            [ Imagen / GIF aquí ]
          </div>
        </div>
        <a 
          href="https://billalbertcode.vercel.app/" 
          className="deprecation-link"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Visitar nuevo portafolio
        </a>
      </div>
    </div>
  )
}

export default DeprecationPage
