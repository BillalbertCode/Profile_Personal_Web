import React from 'react'
import { Link } from 'react-router-dom'
import SocialNetworks from './SocialNetworks'
import BotonCV from './BotonCV'
import InfoSvg from '../assets/icons/InfoSvg'
import ConsoleSvg from '../assets/icons/ConsoleSvg'
import ImageLoader from './ImageLoader'
const Profile = () => {
  return (
    <>
      <div className='div-img'>
        <ImageLoader className='img-fluid' src='http://bill.caribito.com/bill/src/YO.jpg' width="100%" height="100%"/>
      </div>
      <section>
        <h1>BILLALBERT MARTINEZ</h1>
        <SocialNetworks />
        <h2>Front-End Developer</h2>
        <article>
          <p>
            Soy un <strong>Desarrollador Front-End </strong> con experiencia en las mejores prácticas de codificación, la optimización del rendimiento y la garantía de compatibilidad entre navegadores.
          </p>
        </article>
        <div className='main-button'>
          <Link to='/Projects' className='ButtonLink' id="Project">
            <ConsoleSvg />
            Project
          </Link>
          <Link to='/About' className='ButtonLink' id="About">
            <InfoSvg />
            Info
          </Link>
          <BotonCV />
        </div >
      </section>
    </>
  )
}

export default Profile
