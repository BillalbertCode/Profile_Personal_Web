import "../styles/Projects.css"
import Carrusel from "../components/Carrusel"
import GithubSvg from "../assets/icons/GithubSvg"
import EnlaceSvg from "../assets/icons/EnlaceSvg"
import Html5Svg from "../assets/icons/Html5Svg"
import JsSvg from "../assets/icons/JsSvg"
import CssSvg from "../assets/icons/CssSvg"
import ImageLoader from "../components/ImageLoader"

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
        <div className="projects-miniature ">
          <div id="Ruleta" className="miniature">
            <div className="image-miniature">
              <ImageLoader src="http://bill.caribito.com/bill/src/Ruletacapture.png" className="d-block w-100" alt="Ruleta" />
              <a href="https://bill.caribito.com/bill/Ruleta/">
                <div className="overlay">
                  <h4>Ruleta</h4>
                </div>
              </a>
            </div>
            <div className="redes-miniature">
              <a title="GitHub" className="item" target="_blank" href="https://github.com/BillalbertCode/RandomJs">
                <GithubSvg />
              </a>
              <a title="Copy Link" className="item" >
                <EnlaceSvg url="https://bill.caribito.com/bill/Ruleta/" />
              </a>
            </div> 
            <div className="skills-miniature">
              <a title="Html5"><Html5Svg /></a>
              <a title="JavaScript"><JsSvg /></a>
              <a title="Css"><CssSvg /></a>
            </div>
          </div>
          <div id="WAPL" className="miniature">
            <div className="image-miniature">
              <ImageLoader src="https://bill.caribito.com/bill/WAPL/src/Logo/LogoWAPL2White.jpeg" className="d-block w-100" alt="WAPL" />
              <a href="https://bill.caribito.com/bill/WAPL/">
                <div className="overlay">
                  <h4>WAPL Site</h4>
                </div>
              </a>
            </div>
            <div className="redes-miniature">
              <a title="GitHub" className="item" target="_blank" href="https://github.com/BillalbertCode/WAPL-Web">
                <GithubSvg />
              </a>
              <a title="Copy Link" className="item" >
                <EnlaceSvg url="https://bill.caribito.com/bill/WAPL/" />
              </a>
            </div> 
            <div className="skills-miniature">
              <a title="HTML5"><Html5Svg /></a>
              <a title="Css"><CssSvg /></a>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}
export default Projects