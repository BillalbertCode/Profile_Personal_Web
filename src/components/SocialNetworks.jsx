import CorreoSvg from "../assets/icons/CorreoSvg"
import EnlaceSvg from "../assets/icons/EnlaceSvg"
import GithubSvg from "../assets/icons/GithubSvg"
import InstagramSvg from "../assets/icons/InstagramSvg"
import LinkedinSvg from "../assets/icons/LinkedinSvg"
import XtwitterSvg from "../assets/icons/XtwitterSvg"
import { Link } from "react-router-dom"
const SocialNetworks = () => {
    return (
            <div className="socialNetwork flex-initial">
                <a className="item" target="_blank" href="https://www.linkedin.com/in/billalbertcode">
                    <LinkedinSvg/>
                </a>
                <a className="item" target="_blank" href="https://twitter.com/BillalbertCode">
                    <XtwitterSvg/>
                </a>
                <a className="item" target="_blank" href="https://www.instagram.com/billalbertcode/">
                    <InstagramSvg/>
                </a>
                <a className="item" target="_blank" href="https://github.com/billalbertcode">
                    <GithubSvg/>
                </a>
                <Link id="Contacto" className="item contactMe-item " to="/bill/Contact">
                    <CorreoSvg/>
                </Link>
                <a className="item contactMe-item " >
                    <EnlaceSvg url="www.bill.caribito.com/bill/" />
                </a>
        </div>
    )
}

export default SocialNetworks
