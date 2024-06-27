// Componente para mostra los items de los projectos que tengo
// Muestra la miniatura y al hacer click muestra un modal con una descripcion mas detallada
import { useState } from "react";
// Componentes
import ImageLoader from "./ImageLoader";
// Iconos
import GithubSvg from "../assets/icons/GithubSvg";
import EnlaceSvg from "../assets/icons/EnlaceSvg";
/**
 * 
 * @param {String} name - Nombre del Proyecto
 * @param {String} pageLink - Link de la pagina en donde esta el proyecto
 * @param {String} githubLink - Link del github
 * @param {Array} iconsSkill - iconos Skills usadas en el proyecto
 * @param {Array} imagenes - imagenes del proyecto
 * @param {String} descripcion - Descripcion del contenido puede contener componentes
 * @return  
 */
const ProjectCard = ({ name, pageLink, githubLink, iconsSkill, imagenes, descripcion }) => {
    // Carrusel de imagenes
    const [indexImagen, setIndexImagen] = useState(0)
    const handleNext = () => {
        setIndexImagen((indexImagen + 1) % imagenes.length)
    }
    const handlePrev = () => {
        setIndexImagen((indexImagen - 1 + imagenes.length) % imagenes.length)
    }

    // Obtener el nombre del repositorio de github
    const getLinkTitle = (link) => link.replace('https://github.com/BillalbertCode/', ' ');

    // Mostrar title del skill
    const getIconTitle = (iconName) => iconName.replace('Svg', ' ');

    return (
        <div id={name} className="miniature">
            <div className="image-miniature ">
                <ImageLoader src={imagenes[0]} className="img-fluid object-fit-cover" alt={name} />
                <a data-bs-toggle="modal" data-bs-target={`#project${name}`}>
                    <div className="overlay">
                        <h4>{name}</h4>
                    </div>
                </a>
            </div>
            <div className="redes-miniature">
                {githubLink.map((link, index) => {
                    return (
                        <a key={index} title={getLinkTitle(link)} className="item" target="_blank" href={link}>
                            <GithubSvg />
                        </a>
                    )
                })}
                <a title="Copy Link" className="item" >
                    <EnlaceSvg url={pageLink} />
                </a>
            </div>
            <div className="skills-miniature">
                {iconsSkill.slice(0, 3).map((icon, index) => {
                    return (
                        <a key={index} title={getIconTitle(icon.type.name)}>
                            {icon}
                        </a>
                    )
                })}
            </div>
            {/* Modal un poco mas descriptivo */}
            <div className="modal fade" id={`project${name}`} tabindex="-1" aria-labelledby={`project${name}Label`} aria-hidden="true">
                <div data-bs-theme="dark" className="modal-dialog">
                    <div className="modal-content bg-modal">
                        <div className="modal-header ">
                            <h1 className="modal-title fs-5" id={`project${name}Label`}>{name}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body ">
                            <div style={{ height: '250px' }} className="container-fluid bg-body rounded  position-relative">
                                <ImageLoader src={imagenes[indexImagen]} className="img-fluid object-fit-scale" alt={`${indexImagen}${name}`} />
                                <button className="carousel-control-prev btn bg-body" type="button" onClick={handlePrev}>
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden"  >Previous</span>
                                </button>
                                <button onClick={handleNext} className="carousel-control-next btn bg-body" type="button" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className="container mt-4">
                                <h5>Descripcion</h5>
                                {descripcion}
                            </div>
                            <hr />
                            <div className="container d-flex flex-column">
                                <h5>Tecnologias</h5>
                                <div className="d-flex gap-2 flex-wrap" >
                                    {iconsSkill.map((icon, index) => {
                                        return (
                                            <a key={index} className="skillsIcon" title={getIconTitle(icon.type.name)}>
                                                {icon}
                                            </a>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer justify-content-between ">
                            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <div>
                                {githubLink.map((link, index) => {
                                    return (
                                        <a key={index} title={getLinkTitle(link)} className="item" target="_blank" href={link}>
                                            <GithubSvg />
                                        </a>
                                    )
                                })}
                            </div>
                            <a href={pageLink} target="_blank">
                                ir a {name}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;