// Pagina de Proyectos
// Contiene El carrusel de los proyectos
// Las cartas de los proyectos
// Components
import Carrusel from "../components/Carrusel"
import ProjectCard from "../components/ProjectCard"
// Icons
import Html5Svg from "../assets/icons/Html5Svg"
import JsSvg from "../assets/icons/JsSvg"
import CssSvg from "../assets/icons/CssSvg"
import ReactSvg from "../assets/icons/ReactSvg"
import BootstrapSvg from "../assets/icons/BootstrapSvg"
import NextJsSvg from "../assets/icons/NextJsSvg"
import NodeJsSvg from "../assets/icons/NodeJsSvg"
import ExpressSvg from "../assets/icons/ExpressSvg"
import MongoDbSvg from "../assets/icons/MongoDbSvg"
import MongooseSvg from "../assets/icons/MongooseSvg"
import DockerSvg from "../assets/icons/DockerSvg"
import JwtSvg from "../assets/icons/JwtSvg"
import VercelSvg from "../assets/icons/VercelSvg"
import RailwaySvg from "../assets/icons/RailwaySvg"

// Estilos
import "../styles/Projects.css"

const Projects = () => {
  return (
    <div className='Project'>
      <main className="container main-project flex-initial">
        <Carrusel />
      </main>
      <aside className="container aside-project">
        <div className="projects-categorise">
          <div>
            <h5>Proyectos</h5>
          </div>
          <hr />
        </div>
        <div className="projects-miniature">
          <ProjectCard
            name="RaicesWorkSpace"
            pageLink="https://raicesworkspace.vercel.app"
            githubLink={["https://github.com/BillalbertCode/RaicesWorkSpace_Frontend", "https://github.com/BillalbertCode/RaicesWorkSpace_Backend"]}
            iconsSkill={[<ReactSvg />, <NodeJsSvg />, <MongoDbSvg />, <NextJsSvg />, <BootstrapSvg />, <ExpressSvg />, <MongooseSvg />, <DockerSvg />, <VercelSvg />, <RailwaySvg />]}
            imagenes={["/raicesWorkSpace/Home.png", "/raicesWorkSpace/iniciarSesion.png", "/raicesWorkSpace/createArticle.png", "/raicesWorkSpace/registro.png", "/raicesWorkSpace/articulos.png", "/raicesWorkSpace/visitaPerfil.png", "/raicesWorkSpace/modificaPerfil.png"]}
            descripcion={
              <div className="description">
                <p>Raíces, una plataforma WorkSpace para compartir tus pensamientos y creaciones con la comunidad.</p>
                <h6>FrontEnd</h6>
                <p>Desarrollado con tecnologías como React <ReactSvg /> y NextJs <NextJsSvg /> utilizando consumo de APIS y manejo de cokies para la sesion de usuario , la aplicacion por parte del FrontEnd fue desplegada con Vercel <VercelSvg /></p>
                <h6>BackEnd</h6>
                <p>Desarrollado con NodeJs <NodeJsSvg /> y Express <ExpressSvg /> para el manejo de rutas, Mongoose <MongooseSvg /> para el modelado de usuarios y articles de MongoDB junto con JWT <JwtSvg /> para la autenticacion de usuario.</p>
                <p> Docker <DockerSvg /> para despliegue del backend y uso de manera remota y el despliegue del Backend en Railaway <RailwaySvg /> y la base de datos en MongoAtlas<MongoDbSvg /> </p>
              </div>
            }
          />
          <ProjectCard
            name="Ruleta"
            pageLink="https://bill.caribito.com/bill/Ruleta/"
            githubLink={["https://github.com/BillalbertCode/RandomJs"]}
            iconsSkill={[<Html5Svg />, <JsSvg />, <CssSvg />]}
            imagenes={["/ruleta/LogoRuleta.png", "/ruleta/muestra1.png", "/ruleta/muestra2.png", "/ruleta/muestra3.png"]}
            descripcion="Ruleta web de 4 opciones personalizables, la cual selecciona aleatoriamente alguna de las cuatro opciones, contiene alertas con SweetAlert, seleccion de colores en tiempo real y cambio de texto de las opciones"
          />
          <ProjectCard
            name="WAPL"
            pageLink="https://bill.caribito.com/bill/WAPL/"
            githubLink={["https://github.com/BillalbertCode/WAPL-Web"]}
            iconsSkill={[<Html5Svg />, <CssSvg />]}
            imagenes={["/wapl/LogoWAPL2White.jpeg", "/wapl/muestra1.png", "/wapl/muestra2.png"]}
            descripcion="En este proyecto, me encargué de desarrollar una página estática de ropa utilizando tecnologías frontend como HTML y CSS. Mi objetivo era crear una página atractiva y fácil de navegar que permitiera a los usuarios explorar y descubrir nuestra colección de ropa."
          />
        </div>
      </aside>
    </div>
  )
}
export default Projects