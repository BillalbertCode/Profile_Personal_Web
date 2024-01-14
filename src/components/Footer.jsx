import InfoSvg from "../assets/icons/InfoSvg"
import "../styles/Footer.css"
import SocialNetworks from "./SocialNetworks"
import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <footer>
            <div className='container info'>
                <div className='footer links'>
                    <h3 className="subtitulos footer">
                        Billalbert Martinez
                    </h3>
                    <Link to='/Projects'>
                        PROYECTOS
                    </Link>
                    <Link to="/About">
                        ABOUT
                    </Link>
                    <Link to="/Contact">
                        CONTACTAR
                    </Link>
                </div>
                <div className='footer reds'>
                    <h3 className="footer subtitulos">
                        Redes
                    </h3>
                    <SocialNetworks />
                </div>
                <div className="mencions">
                    <p>"Este sitio web utiliza <a href="https://getbootstrap.com/">Boostrap</a> para el diseño y <a href="https://es.react.dev/">React </a>para la construccion de interfaces interactivas."</p>
                </div>
            </div>
            <div className="copiright">
                <hr/>
                <p>© Billalbert Martinez - @BillalbertCode </p>
                <Link to="/About">
                    <InfoSvg/>
                </Link>
            </div>
        </footer>
    )
}

export default Footer
