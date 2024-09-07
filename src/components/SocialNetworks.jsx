// Componente que muestra las Todas las redes Sociales
import { Link } from "react-router-dom"
// Iconos
import { CorreoSvg } from "../assets/icons/UtilsIcons"
import EnlaceSvg from "../assets/icons/EnlaceSvg"
import { GithubSvg } from "../assets/icons/SkillIcons"
import { InstagramSvg, LinkedinSvg, XtwitterSvg } from "../assets/icons/RedesIcons"
const SocialNetworks = ({ ...props }) => {
    return (
        <div {...props} className="socialNetwork flex-initial ">
            <a title="Linkedin" className="item" target="_blank" href="https://www.linkedin.com/in/billalbertcode">
                <LinkedinSvg />
            </a>
            <a title="X / Twitter" className="item" target="_blank" href="https://twitter.com/BillalbertCode">
                <XtwitterSvg />
            </a>
            <a title="Instagram" className="item" target="_blank" href="https://www.instagram.com/billalbertcode/">
                <InstagramSvg />
            </a>
            <a title="GitHub" className="item" target="_blank" href="https://github.com/billalbertcode">
                <GithubSvg />
            </a>
            <Link title="Contacto" id="Contacto" className="item contactMe-item " to="/bill/Contact">
                <CorreoSvg />
            </Link>
            <a title="Copy Link" className="item contactMe-item " >
                <EnlaceSvg url="www.bill.caribito.com/bill/" />
            </a>
        </div>
    )
}

export default SocialNetworks
