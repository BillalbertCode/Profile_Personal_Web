// import { useEffect, useState } from "react";
import BlockCode from './BlockCode'
const AsideFirst = () => {
  // const [initialize, setInitialize] = useState(false);
  // useEffect(() => {
  //   setInitialize(true)
  // }, []);
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
      <BlockCode/>
      {/* {initialize ? <BlockCode /> : <p>...</p>} */}
    </>
  )
}

export default AsideFirst
