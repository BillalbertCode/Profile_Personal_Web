import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { funky } from 'react-syntax-highlighter/dist/esm/styles/prism';
import useWriting from '../hooks/useWriting';
import { useRef, useEffect } from 'react';

const BlockCode = () => {
  const written = [
    `
    import '../styles/Profile.css'
    import "../styles/AsideFirst.css"
    import Profile from '../components/Profile'
    import AsideFirst from '../components/AsideFirst'
    export const Inicio = () => {
      return (
        <>
          <main>
            <Profile />
          </main>
          <aside className='aside'/>
            <AsideFirst />
          </aside>
        </>
      )
    }
    export default Inicio`,
    `
  import React from 'react'
  import SocialNetworks from './SocialNetworks'
  import BotonCV from './BotonCV'
  import { Link } from 'react-router-dom'
  const Profile = () => {
    return (
      <>
        <div>
          <img className='img-fluid' src='src/assets/YO.jpg' width="280px" />
        </div>
        <section>
          <h1>BILLALBERT MARTINEZ</h1>
          <SocialNetworks />
          <h2>Front-End Devloper</h2>
          <article>
            <p>
              Soy un <strong>Desarrollador Front-End </strong> con experiencia en las mejores prácticas de codificación, la optimización del rendimiento y la garantía de compatibilidad entre navegadores.
            </p>
          </article>
          <aside>
            <Link to='/bill/Projects' className='ButtonLink' id="Project">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-terminal" viewBox="0 0 16 16">
                <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z" />
                <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
              </svg>
  
              Project
            </Link>
            <Link to='/bill/About' className='ButtonLink' id="About">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
              </svg>
              Info
            </Link>
            <BotonCV/>
          </aside>
        </section>
      </>
    )
  }
  
  export default Profile`, `
  import { useEffect,useState } from "react";
import BlockCode from "./BlockCode"
const AsideFirst = () => {
  const [initialize, setInitialize] = useState(false);
  useEffect(() => {
    setInitialize(true)
  }, []);
  return (
    <>
      <div className="Resume container">
        <h2>Resume</h2>
        <h4>FRONT-END</h4>
        <blockquote>Soy un apasionado desarrollador front-end con una firme convicción en la importancia del diseño de experiencias de usuario impactantes.</blockquote>
        <p>
          Mi trayectoria autodidacta me ha llevado a especializarme en tecnologías clave como JavaScript, React y CSS, explorando constantemente nuevas tendencias y enfoques para crear interfaces visuales atractivas y funcionales.
        </p>
      </div>
      {initialize ? <BlockCode/> : <p>...</p> }
    </>
  )
}

export default AsideFirst
`, `
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { funky } from 'react-syntax-highlighter/dist/esm/styles/prism';
import useWriting from '../hooks/useWriting';
import { useRef, useEffect } from 'react';

const BlockCode = () => {
  const written = [
    "
    import '../styles/Profile.css'
    import "../styles/AsideFirst.css"
    const { write } = useWriting(written, true);
    const containerRef = useRef(null)
    "
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollTo({
          top: containerRef.current.scrollHeight,
          behavior: 'smooth',
        });
      }
    }, 10000);
    return () => clearInterval(interval)
  }, []);
  return (
    <div ref={containerRef} className="BlockCode container" >
      <SyntaxHighlighter language="jsx" style={funky}>
        {write}
      </SyntaxHighlighter>
    </div >
  );
};

export default BlockCode;
`, `
import { useState, useEffect } from 'react'

const useWriting = (written, repeat) => {
    const [write, setWrite] = useState('')
    const [index, setIndex] = useState(0)
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const texto = written[textIndex];
        if (index < texto.length) {
            const timer = setInterval(() => {
                setWrite((prevWrite) => prevWrite + texto[index]);
                setIndex((prevIndex) => prevIndex + 1);
            }, 50);

            return () => clearInterval(timer);
        } else if (textIndex < written.length - 1) {
            setTimeout(() => {
                setWrite('')
                setIndex(0)
                setTextIndex((prevIndex) => prevIndex + 1)
            }, 1000);
        }
        if (repeat === true && (texto.length === index && textIndex  === written.length -1 )) {
            setTimeout(() => {
                setWrite('')
                setIndex(0)
                setTextIndex(0)
            }, 1000);

        }
    }, [index]);

    return { write };
};

export default useWriting
`
  ]
  const containerRef = useRef(null)
  const write = useWriting(written, true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollTo({
          top: containerRef.current.scrollHeight,
          behavior: 'smooth',
        });
      }
    }, 10000);
    return () => clearInterval(interval)
  }, []);
  return (
    <div ref={containerRef} className='BlockCode container' >
      <SyntaxHighlighter language='jsx' style={funky} >
        {write}
      </SyntaxHighlighter>
    </div >
  );
};

export default BlockCode;