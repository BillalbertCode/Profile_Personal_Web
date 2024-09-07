import { Link } from "react-router-dom"
// Estilos
import "../styles/Footer.css"
// Components
import SocialNetworks from "./SocialNetworks"
// Icons
import { InfoSvg } from "../assets/icons/UtilsIcons"
const Footer = () => {
    return (
        <footer>
            <div className='container info'>
                <div className='footer links column-nowrap-center'>
                    <h3 className="subtitulos footer">
                        Billalbert Martinez
                    </h3>
                    <Link to='/bill/Projects'>
                        PROYECTOS
                    </Link>
                    <Link to="/bill/About">
                        ABOUT
                    </Link>
                    <Link to="/bill/Contact">
                        CONTACTAR
                    </Link>
                </div>
                <div className='footer reds column-nowrap-center'>
                    <h3 className="footer subtitulos">
                        Redes
                    </h3>
                    <SocialNetworks />
                </div>
                <div className="mencions text-comentary">
                    <p>"Este sitio web utiliza <a href="https://getbootstrap.com/">Boostrap</a> para el diseño y <a href="https://es.react.dev/">React </a>para la construccion de interfaces interactivas."</p>
                </div>
            </div>
            <div className="copiright">
                <hr />
                <p>© Billalbert Martinez - @BillalbertCode </p>
                <Link title="Mas Informacion" to="/bill/About">
                    <InfoSvg />
                </Link>
            </div>
        </footer>
    )
}

export default Footer
