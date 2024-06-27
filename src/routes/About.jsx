// Components
import IndiceAbout from '../components/IndiceAbout';
import ImageLoader from '../components/ImageLoader';
// Funciones
import { getIconTitle } from '../utils/getIconTitle';
// Icons
import CssSvg from '../assets/icons/CssSvg'
import JsSvg from '../assets/icons/JsSvg'
import Html5Svg from '../assets/icons/Html5Svg'
import ReactSvg from '../assets/icons/ReactSvg'
import NodeJsSvg from '../assets/icons/NodeJsSvg'
import GitSvg from '../assets/icons/GitSvg'
import ViteSvg from '../assets/icons/ViteSvg'
import RRDSvg from '../assets/icons/RRDSvg'
import BootstrapSvg from '../assets/icons/BootstrapSvg';
import NextJsSvg from '../assets/icons/NextJsSvg';
import GithubSvg from '../assets/icons/GithubSvg';
import VercelSvg from '../assets/icons/VercelSvg';
import RailwaySvg from '../assets/icons/RailwaySvg';
import MongoAtlasSvg from '../assets/icons/MongoAtlasSvg';
import DockerSvg from '../assets/icons/DockerSvg';
import ExpressSvg from '../assets/icons/ExpressSvg';
import MongooseSvg from '../assets/icons/MongooseSvg';
import MongoDbSvg from '../assets/icons/MongoDbSvg';
// Styles
import '../styles/About.css'

const HabilidadesCard = ({ title, skills }) => {
  return (
    <div className="habilidades-container">
      <h3>{title}</h3>
      <div className='d-flex gap-1'>
        {skills.map((icon, index) => {
          return (
            <div key={index} title={getIconTitle(icon)}>
              {icon}
            </div>
          )
        })}
      </div>
    </div>
  )
}

const About = () => {
  return (
    <div className="container About">
      <div className="row">
        <IndiceAbout />
        <div className="main-about">
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
          <h2>Habilidades Tecnicas</h2>
          <div className='habilidades flex-initial'>
            <HabilidadesCard
              title="Control De Versiones"
              skills={[<GitSvg />, <GithubSvg />]}
            />
            <HabilidadesCard
              title="Herramientas de Desarrollo y Despliegue "
              skills={[<ViteSvg />, <VercelSvg />, <RailwaySvg />, <MongoAtlasSvg />, <DockerSvg />]}
            />
          </div>

          <h2>FrontEnd</h2>
          <div className='habilidades flex-initial'>
            <HabilidadesCard
              title="Lenguajes"
              skills={[<JsSvg />]}
            />
            <HabilidadesCard
              title="Frameworks y Librerias"
              skills={[<ReactSvg />, <RRDSvg />]}
            />
            <HabilidadesCard
              title="Herramientas de desarrollo"
              skills={[<ViteSvg />]}
            />
            <HabilidadesCard
              title={"Estilos"}
              skills={[<CssSvg />, <BootstrapSvg />]}
            />
            <HabilidadesCard
              title="Frameworks de Renderizado"
              skills={[<NextJsSvg />]}
            />

          </div>

          <h2>Backend</h2>
          <div className='habilidades flex-initial'>
            <HabilidadesCard
              title="Lenguajes"
              skills={[<JsSvg />]}
            />
            <HabilidadesCard
              title="Frameworks y Librerias"
              skills={[<NodeJsSvg />, <ExpressSvg />, <MongooseSvg />]}
            />
            <HabilidadesCard
              title="Base de Datos"
              skills={[<MongoDbSvg />]}
            />
          </div>

          <hr />
          <h2 id="educacion">Educación </h2>
          <ul>
            <li>Bachiller, U.E.N Alonso Andrea de Ledesma, Julio 2020</li>
            <li>Colegio Universitario de Caracas: 2do Semestre en Informática. (Estudios Vigentes)</li>
          </ul>
          <section className='certifications'>
            <h2 id="certificaciones">Certificaciones</h2>
            <div className="container-certification">
              <p className="text-certification"><span>FreeCodeCamp </span>
                <a title="Ver Certificado" target='_Blank' href='https://www.freecodecamp.org/certification/fcc1a56704f-3616-4004-8d9a-3d0a5cf852e3/responsive-web-design'>Responsive Web Design</a> <span className="small-description">(Html, Css and Querys)</span> </p>
              <a target='_Blank' className="img-certification-link" href='https://www.freecodecamp.org/certification/fcc1a56704f-3616-4004-8d9a-3d0a5cf852e3/responsive-web-design'><ImageLoader title="Responsive Web Design, Certificado" src="https://bill.caribito.com/bill/src/Certificate_Responsive-Web-Design_Mini.png" className="img-certification" /></a>
            </div>
          </section>
          <hr />
          <h2 id="experiencia">Experiencia Laboral</h2>
          <div className="experiencia">
            <h3>Desarrollador FrontEnd.</h3>
            <h4>  Marzo 2019 - Diciembre 2021.</h4><br />
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
            <br />
            <blockquote className='text-comentary'>Mi enfoque proactivo y habilidades técnicas sólidas aseguraron la entrega exitosa de proyectos mientras mantenía altos estándares de calidad y satisfacción del cliente.</blockquote>
            <hr />
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
    </div >
  );
}

export default About;
