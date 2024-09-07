import React from 'react'
import { Link } from 'react-router-dom'
// Components
import SocialNetworks from './SocialNetworks'
import BotonCV from './BotonCV'
import ImageLoader from './ImageLoader'
// Icons
import { ConsoleSvg, InfoSvg } from '../assets/icons/UtilsIcons'
const Profile = () => {
  return (
    <>
      <div className='div-img'>
        <ImageLoader className='img-fluid' src='http://bill.caribito.com/bill/src/YO.jpg' width="100%" height="100%" />
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
          <Link to='/bill/Projects' className='ButtonLink' id="Project">
            <ConsoleSvg />
            Project
          </Link>
          <Link to='/bill/About' className='ButtonLink' id="About">
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
