import "../styles/Skills.css"
import { useState, useEffect } from 'react'
import GitSvg from "../assets/icons/GitSvg"
import ViteSvg from "../assets/icons/ViteSvg"
import RRDSvg from "../assets/icons/RRDSvg"
import CssSvg from "../assets/icons/CssSvg"
import Html5Svg from "../assets/icons/Html5Svg"
import JsSvg from "../assets/icons/JsSvg"
import ReactSvg from "../assets/icons/ReactSvg"
import NodeJsSvg from "../assets/icons/NodeJsSvg"

const Skills = () => {
    const icons = [
        {
            img: " ",
            title:" ",
            text: " ",
            key: 0
        },
        {
            img: <CssSvg />,
            title: "Css",
            text: "Se encarga del aspecto visual de una página web, controlando el diseño, la presentación y la apariencia de los elementos HTML.",
            key:1
        },
        {
            img: <JsSvg />,
            title: "JS",
            key:2,
            text: "Se emplea para realizar acciones como validación de formularios, animaciones, manipulación del DOM y comunicación con servidores, brindando una experiencia dinámica al usuario."
        },
        {
            img: <Html5Svg />,
            title: "Html",
            key:3,
            text: "Define la estructura y el contenido de una página web, utilizando etiquetas para organizar y presentar información."
        },
        {
            img: <ReactSvg />,
            title: "React",
            key:4,
            text: "Biblioteca de JavaScript que permite construir interfaces de usuario mediante componentes reutilizables, basada en el concepto de Virtual DOM."
        },
        {
            img: <NodeJsSvg />,
            title: "Node JS",
            key:5,
            text: "Se utiliza para construir aplicaciones del lado del servidor. Permite ejecutar JavaScript fuera del navegador, interactuar con bases de datos, manejar solicitudes HTTP y construir aplicaciones web en tiempo real."
        },
        {
            img: <GitSvg />,
            title: "Git",
            key:6,
            text: "Es esencial para el control de versiones y la colaboración en proyectos de desarrollo. Permite el seguimiento de cambios en el código, la gestión de ramas, la fusión de código y el trabajo colaborativo entre desarrolladores."
        },
        {
            img: <ViteSvg />,
            title: "Vite",
            key:7,
            text: "Vite es una herramienta de construcción rápida que mejora la eficiencia del desarrollo web al ofrecer tiempos de compilación más cortos y un entorno de desarrollo ágil para proyectos basados en JavaScript y TypeScript."
        },
        {
            img: <RRDSvg />,
            title: "React Router Doom",
            key:8,
            text: "Permite la navegación y gestión de rutas en aplicaciones React. Facilita la creación de aplicaciones de una sola página (SPA) al definir diferentes vistas y rutas dentro de la aplicación."
        },
    ]

    const [indexIconSelect, setIndexIconSelect] = useState(2)

    const rotateIcons = () => {
        const numberItemSide = 1;
        return icons.map((icon , index) => {
            const comparacion = Math.abs(indexIconSelect - index );
            if (comparacion <= numberItemSide) {
                return (
                    <>
                        <div key={icon.key} onClick={icon.key > 0 ? () => setIndexIconSelect(index) : false} className={icon.key > 0 && `grid-item${comparacion === 0 ? " icon-front" : " icon-rendered"}`}>
                            {icon.img} <p>{icon.title}</p>
                        </div>
                        <p className="article grid-item">
                            {comparacion === 0 && icon.text}
                        </p>
                    </>
                );
            }
            return null;
        })
    }

    useEffect(() => {
        rotateIcons()
    }, []);

    return (
        <div className="container skill-container column-nowrap-center">
            <h2 >Habilidades y Herramientas</h2>
            <div className="icon-container grid-container">
                {rotateIcons()}
            </div>
        </div>
    )
}

export default Skills
