// Pagina de Proyectos
// Contiene El carrusel de los proyectos
// Las cartas de los proyectos
// Components
import Carrusel from "../components/Carrusel"
import ProjectCard from "../components/ProjectCard"

// Icons
import {
  Html5Svg,
  JsSvg,
  CssSvg,
  ReactSvg,
  BootstrapSvg,
  NextJsSvg,
  NodeJsSvg,
  ExpressSvg,
  MongoDbSvg,
  MongooseSvg,
  DockerSvg,
  JwtSvg,
  VercelSvg,
  RailwaySvg,
  TypescriptSvg,
  TailwindSvg
} from "../assets/icons/SkillIcons"

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
            name="JobChatbotAI"
            pageLink="https://job-chatbot-ia.vercel.app/"
            githubLink={["https://github.com/BillalbertCode/job-chatbot-ia"]}
            iconsSkill={[, <TypescriptSvg />, <ReactSvg />, <TailwindSvg />]}
            imagenes={["/bill/assets/jobChatbotIA/heroJobChatbot.webp", "/bill/assets/jobChatbotIA/muestra1.webp", "/bill/assets/jobChatbotIA/muestra2.webp", "/bill/assets/jobChatbotIA/muestra3.webp"]}
            descripcion="Chatbot Inteligente enfocado en la asistencia de Trabajo, con uso interactivo de Herramientas. creado con el LLM Gemini y IA SDK para facilicitar la creacion del chatbot."
          />
          <ProjectCard
            name="RaicesWorkSpace"
            pageLink="https://raicesworkspace.vercel.app"
            githubLink={["https://github.com/BillalbertCode/RaicesWorkSpace_Frontend", "https://github.com/BillalbertCode/RaicesWorkSpace_Backend"]}
            iconsSkill={[<ReactSvg />, <NodeJsSvg />, <MongoDbSvg />, <NextJsSvg />, <BootstrapSvg />, <ExpressSvg />, <MongooseSvg />, <DockerSvg />, <VercelSvg />, <RailwaySvg />]}
            imagenes={["/bill/assets/raicesWorkSpace/Home.png", "/bill/assets/raicesWorkSpace/iniciarSesion.png", "/bill/assets/raicesWorkSpace/createArticle.png", "/bill/assets/raicesWorkSpace/registro.png", "/bill/assets/raicesWorkSpace/articulos.png", "/bill/assets/raicesWorkSpace/visitaPerfil.png", "/bill/assets/raicesWorkSpace/modificaPerfil.png"]}
            descripcion={
              <div className="description">
                <p>Raíces, una plataforma WorkSpace para compartir tus pensamientos y creaciones con la comunidad.</p>
                <h6>FrontEnd</h6>
                <p>Desarrollado con tecnologías como React y NextJs utilizando consumo de APIS y manejo de cokies para la sesion de usuario , la aplicacion por parte del FrontEnd fue desplegada con Vercel </p>
                <h6>BackEnd</h6>
                <p>Desarrollado con NodeJs y Express para el manejo de rutas, Mongoose para el modelado de usuarios y articles de MongoDB junto con JWT para la autenticacion de usuario.</p>
                <p> Docker para despliegue del backend y uso de manera remota y el despliegue del Backend en Railaway y la base de datos en MongoAtlas</p>
              </div>
            }
          />
          <ProjectCard
            name="Ruleta"
            pageLink="https://bill.caribito.com/bill/Ruleta/"
            githubLink={["https://github.com/BillalbertCode/RandomJs"]}
            iconsSkill={[<Html5Svg />, <JsSvg />, <CssSvg />]}
            imagenes={["/bill/assets/ruleta/LogoRuleta.png", "/bill/assets/ruleta/muestra1.png", "/bill/assets/ruleta/muestra2.png", "/bill/assets/ruleta/muestra3.png"]}
            descripcion="Ruleta web de 4 opciones personalizables, la cual selecciona aleatoriamente alguna de las cuatro opciones, contiene alertas con SweetAlert, seleccion de colores en tiempo real y cambio de texto de las opciones"
          />
          <ProjectCard
            name="WAPL"
            pageLink="https://bill.caribito.com/bill/WAPL/"
            githubLink={["https://github.com/BillalbertCode/WAPL-Web"]}
            iconsSkill={[<Html5Svg />, <CssSvg />]}
            imagenes={["/bill/assets/wapl/LogoWAPL2White.jpeg", "/bill/assets/wapl/muestra1.png", "/bill/assets/wapl/muestra2.png"]}
            descripcion="En este proyecto, me encargué de desarrollar una página estática de ropa utilizando tecnologías frontend como HTML y CSS. Mi objetivo era crear una página atractiva y fácil de navegar que permitiera a los usuarios explorar y descubrir nuestra colección de ropa."
          />

        </div>
      </aside>
    </div>
  )
}
export default Projects