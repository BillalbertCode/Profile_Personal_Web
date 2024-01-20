import IndiceAbout from '../components/IndiceAbout';
import CssSvg from '../assets/icons/CssSvg'
import JsSvg from '../assets/icons/JsSvg'
import Html5Svg from '../assets/icons/Html5Svg'
import ReactSvg from '../assets/icons/ReactSvg'
import NodeJsSvg from '../assets/icons/NodeJsSvg'
import GitSvg from '../assets/icons/GitSvg'
import ViteSvg from '../assets/icons/ViteSvg'
import RRDSvg from '../assets/icons/RRDSvg'
import BootstrapSvg from '../assets/icons/BootstrapSvg';
import '../styles/About.css'
const About = () => {
  return (
    <div className="container About">
      <div className="row">
        <IndiceAbout />
        <div className="col-lg-9">
          <h2 id="biografia">Biografía</h2>
          <p>
            Soy un entusiasta del desarrollo con una sólida base técnica en informática y programación. Busco fusionar mi destreza técnica con la creatividad para impulsar el éxito organizacional. Mi experiencia en front-end abarca la codificación, optimización del rendimiento y la garantía de compatibilidad entre navegadores.
          </p>
          <hr />
          <h2 id="habilidades">Habilidades y Competencias</h2>
          <p>
            Soy un apasionado desarrollador front-end con una firme convicción en la importancia del diseño de experiencias de usuario impactantes. Me he especializado en tecnologías clave como JavaScript, React, y CSS. Constantemente exploro nuevas tendencias y enfoques para crear interfaces visuales atractivas y funcionales.
          </p>
          <p>Utilizo herramientas como Photoshop y Excel para potenciar mi creatividad y habilidades técnicas. Me destaco por entregar proyectos antes de los plazos establecidos, perfeccionando cada detalle.</p>
          <div className='habilidades'>
            <div className="fundamentos habilidades-container">
              <h3>Fundamentos del Desarrollo Web</h3>
              <div title='Css'>
                <CssSvg />
              </div>
              <div title='JavaScript'>
                <JsSvg />
              </div>
              <div title='HTML 5'>
                <Html5Svg />
              </div>
            </div>
            <div className="bibliotecas habilidades-container">
              <h3>Herramientas y Bibliotecas de Desarrollo Front-end</h3>
              <div title='React'>
                <ReactSvg />
              </div>
              <div title='Boostrap'>
                <BootstrapSvg />
              </div>
              <div title='React Router Doom'>
                <RRDSvg />
              </div>
            </div>
            <div className="entornoDeEjecucion habilidades-container">
              <h3>Herramientas de Desarrollo y Entorno de Ejecución</h3>
              <div title='NodeJs'>
                <NodeJsSvg />
              </div>
              <div title='Git'>
                <GitSvg />
              </div>
              <div title='Vite'>
                <ViteSvg />
              </div>
            </div>
          </div>
          <hr />
          <h2 id="educacion">Educación y Certificaciones</h2>
          <ul>
            <li>Bachiller, U.E.N Alonso Andrea de Ledesma, Julio 2020</li>
            <li>Colegio Universitario de Caracas: 2do Semestre en Informática. (Estudios Vigentes)</li>
          </ul>
          <hr />
          <h2 id="experiencia">Experiencia Laboral</h2>
          <div className="experiencia">
            <h3>Desarrollador FrontEnd.</h3>
            <h4>  Marzo 2019 - Diciembre 2021.</h4><br/>
            <p>Como Desarrollador FrontEnd, colaboré estrechamente con clientes externos para convertir sus visiones en sitios web funcionales y visualmente atractivos. Destaco por:</p>
            <ul>
              <li>
                <span>Desarrollo y Entrega de Proyectos: </span>
                <p>Lideré la creación y entrega de soluciones front-end para múltiples clientes, garantizando plazos cumplidos y satisfacción del cliente.</p>
              </li>
              <li>
                <span>Resolución Eficaz de Problemas:</span>
                <p>Identifiqué y resolví desafíos técnicos, asegurando la integridad y funcionalidad de los sitios web desarrollados.</p>
              </li>
              <li>
                <span>Colaboración Efectiva en Equipos: </span>
                <p>Trabajé en estrecha colaboración con equipos multidisciplinarios para diseñar e implementar interfaces intuitivas y fáciles de usar.</p>
              </li>
              <li>
                <span>Dominio de Tecnologías Clave:</span>
                <p>Utilicé JavaScript, HTML y CSS como lenguajes fundamentales, destacando la importancia de la estética y la funcionalidad en cada proyecto.</p>
              </li>
            </ul>
            <br/>
            <blockquote>Mi enfoque proactivo y habilidades técnicas sólidas aseguraron la entrega exitosa de proyectos mientras mantenía altos estándares de calidad y satisfacción del cliente.</blockquote>
            <hr/>
          </div>
          <p></p>
          <h2 id="intereses">Intereses y Aficiones</h2>
          <ul>
            <li><span>Exploración y Aprendizaje a Través de la Lectura:</span>  La lectura es mi ventana hacia la expansión del conocimiento. </li>
            <li><span>Creatividad como Fuente de Inspiración:</span> La creación es mi vía para expresar ideas y visiones únicas. Encuentro en la escritura, el diseño gráfico y la música un espacio para materializar conceptos innovadores y narrativas inspiradoras.</li>
            <li><span>Enfoque en la Innovación y la Resolución de Problemas:</span> La innovación constante es mi motor. Me impulsa a buscar soluciones imaginativas y efectivas para desafíos diversos. A través de la combinación de creatividad e ingenio.</li>
          </ul>
          <hr />
          <h2 id="valores">Valores y Objetivos Profesionales</h2>
          <p>
            Mi visión es convertirme en un programador full-stack versátil. Estoy comprometido a expandir mis conocimientos en bases de datos, perfeccionar mi dominio de SQL y Python para manejar datos de manera eficiente. Además, aspiro a explorar el lenguaje C++ para la creación de aplicaciones de escritorio y mejorar mis habilidades como programador desktop. Estoy completamente comprometido con mi desarrollo profesional y dispuesto a dedicar el esfuerzo necesario para alcanzar mis metas.
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default About;
