import '../styles/nav.css'
import { NavLink } from 'react-router-dom';
// Contexto
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
// Icons
import { ConsoleSvg, HouseSvg, InfoSvg, TelephoneSvg } from '../assets/icons/UtilsIcons';
const Nav = () => {
    const { theme, themeToogle } = useContext(ThemeContext)
    return (
        <>
            <nav id="navcss" className="navbar  navbar-expand-lg sticky-top" >
                <div className="container-fluid">
                    <NavLink title="Home" to='/bill/Home' id="HomeNav"  >
                        <HouseSvg />
                    </NavLink>
                    <div className="nav justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink to="/bill/Home" id="Inicio" className="nav-link">
                                <p>Inicio</p>
                                <HouseSvg />
                            </NavLink>
                            <NavLink to="/bill/Projects" className="nav-link">
                                <p>Proyectos</p>
                                <ConsoleSvg />
                            </NavLink>
                            <NavLink to="/bill/About" className="nav-link">
                                <p>AcercaDe</p>
                                <InfoSvg />
                            </NavLink>
                            <NavLink to="/bill/Contact" className="nav-link">
                                <p>Contactar</p>
                                <TelephoneSvg />
                            </NavLink>
                            <a title={theme ? "Tema Claro!" : " Tema Oscuro!"} id="sun-moon" className="navbar-brand" onClick={themeToogle}  >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-moon-stars" viewBox="0 0 16 16">
                                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278M4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
                                    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-sun-fill" viewBox="0 0 16 16">
                                    <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav
