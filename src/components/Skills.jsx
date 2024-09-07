// Rueda de Hard Skills con title and description
// On Home 
import { useState, useEffect } from 'react'
// Icons
import {
    GitSvg,
    CssSvg,
    Html5Svg,
    JsSvg,
    ReactSvg,
    NodeJsSvg,
    ExpressSvg,
    NextJsSvg,
    MongoDbSvg,
    DockerSvg
} from "../assets/icons/SkillIcons"
// Estilos
import "../styles/Skills.css"

const Skills = () => {
    const icons = [
        {
            img: " ",
            title: " ",
            text: " ",
            key: 0
        },
        {
            img: <JsSvg />,
            title: "JavaScript",
            text: "El lenguaje de programación principal para desarrollo web, tanto del lado del cliente como del servidor. Con JavaScript puedes crear aplicaciones interactivas y dinámicas.",
            key: 1
        },
        {
            img: <ReactSvg />,
            title: "React",
            key: 2,
            text: "Una biblioteca de JavaScript para construir interfaces de usuario. React facilita la creación de componentes reutilizables y el manejo eficiente del estado de las aplicaciones."
        },
        {
            img: <NodeJsSvg />,
            title: "NodeJS",
            key: 3,
            text: "Un entorno de ejecución para JavaScript del lado del servidor. Node.js permite construir aplicaciones escalables y rápidas, especialmente útiles para aplicaciones en tiempo real."
        },
        {
            img: <ExpressSvg />,
            title: "Express",
            key: 4,
            text: "Un framework minimalista para Node.js que facilita la creación de servidores y aplicaciones web robustas y eficientes. Es conocido por su simplicidad y flexibilidad."
        },
        {
            img: <NextJsSvg />,
            title: "NextJs",
            key: 5,
            text: "Un framework para React que permite la renderización del lado del servidor (SSR) y la generación de sitios estáticos (SSG). Next.js es ideal para aplicaciones React con necesidades avanzadas de rendimiento y SEO."
        },
        {
            img: <MongoDbSvg />,
            title: "MongoDB",
            key: 6,
            text: "Una base de datos NoSQL orientada a documentos, conocida por su flexibilidad y escalabilidad. MongoDB es una elección popular para aplicaciones modernas que manejan grandes volúmenes de datos."
        },
        {
            img: <DockerSvg />,
            title: "Docker",
            key: 7,
            text: "Una plataforma de contenedorización que permite empaquetar aplicaciones y sus dependencias en contenedores ligeros y portátiles. Docker asegura consistencia en diferentes entornos de desarrollo y producción."
        },
        {
            img: <GitSvg />,
            title: "Git",
            key: 8,
            text: "Un sistema de control de versiones distribuido que permite gestionar y mantener un historial de cambios en el código fuente. Git es esencial para el trabajo colaborativo en proyectos de software."
        },
        {
            img: <Html5Svg />,
            title: "HTML5",
            key: 9,
            text: "La última versión del lenguaje de marcado estándar para crear y estructurar páginas web."
        },
        {
            img: <CssSvg />,
            title: "Css",
            key: 10,
            text: "El lenguaje de estilos utilizado para diseñar y estructurar la apariencia visual de las páginas web. CSS permite crear interfaces atractivas y responsivas."
        }
    ]

    const [indexIconSelect, setIndexIconSelect] = useState(2)

    const rotateIcons = () => {
        const numberItemSide = 1;
        return icons.map((icon, index) => {
            const comparacion = Math.abs(indexIconSelect - index);
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
