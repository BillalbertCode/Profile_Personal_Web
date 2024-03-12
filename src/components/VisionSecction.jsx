import "../styles/VisionSecction.css"
import CppSVg from "../assets/icons/CppSVg"
import DataBase from "../assets/icons/DataBase"
import MySqlSvg from "../assets/icons/MySqlSvg"
import PCDisplay from "../assets/icons/PCDisplay"
import PhytonSvg from "../assets/icons/PhytonSvg"
import Server from "../assets/icons/ServerSvg"
const VisionSecction = () => {
    return (
        <div className="principal vision">
            <h2>Vision</h2>
            <div className="VisionContent">
                <div className="visionFirst flex-initial">
                    <p>Mi visión hacia el futuro es convertirme en un programador full-stack de gran alcance y versatilidad. Estoy comprometido a expandir mis conocimientos en bases de datos, perfeccionando mi dominio de SQL y Python para manejar datos de manera eficiente y efectiva.</p>
                    <div className="vision main">
                        <div className="vision item">
                            <p>Web App</p>
                            <PCDisplay id="item0" />
                        </div>
                        <div className="vision item">
                            <p>Servidor</p>
                            <Server id="item1" />
                        </div>
                        <div className="vision item">
                            <p>DataBase</p>
                            <DataBase id="item2" />
                        </div>
                        <h3>FULL-STACK</h3>
                    </div>
                </div>
            </div>
            <div className="vision aside column-nowrap-center">
                <p>Además, aspiro a explorar a fondo el lenguaje C++, aprovechándolo para la creación de aplicaciones de escritorio y desarrollar mis habilidades como programador desktop. Este viaje requiere dedicación y esfuerzo, pero estoy completamente comprometido con mi desarrollo profesional.</p>
                <div className="vision item aside-items">
                        <PhytonSvg/>
                        <CppSVg />
                        <MySqlSvg />
                </div>
            </div>
        </div>
    )
}

export default VisionSecction
