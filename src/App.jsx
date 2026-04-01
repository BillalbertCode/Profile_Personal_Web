import './styles/App.css'
import { useContext } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Inicio from './routes/Inicio'
import Contact from './routes/Contact'
import Projects from './routes/Projects'
import About from './routes/About'
import ErrorPage from './routes/ErrorPage'
import DeprecationPage from './routes/DeprecationPage'
import Nav from './components/Nav'
import DeprecationBanner from './components/DeprecationBanner'
import { ThemeContext } from './context/ThemeContext'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  const { theme } = useContext(ThemeContext)
  const location = useLocation()
  
  // Rutas donde NO se debe mostrar la navegación ni el footer
  const isDeprecationPath = location.pathname === '/bill' || location.pathname === '/bill/Home' || location.pathname === '/'

  return (
    <div className={theme ? "dark" : "light"}>  
      {!isDeprecationPath && <DeprecationBanner />}
      {!isDeprecationPath && <Nav />}
      <ScrollToTop/>
      <Routes >
        <Route path='/bill' element={<DeprecationPage />}></Route>
        <Route path='/bill/Home' element={<DeprecationPage />}></Route>
        <Route path='/bill/home-deprecated' element={<Inicio />}></Route>
        <Route path='/bill/Projects' element={<Projects />}></Route>
        <Route path='/bill/About' element={<About />}></Route>
        <Route path='/bill/Contact' element={<Contact />}></Route>
        <Route path='/bill/*' element={<ErrorPage />}></Route>
        <Route path='/' element={<Navigate to='/bill' />}></Route>
      </Routes>
      {!isDeprecationPath && <Footer />}
    </div>
  )
}
export default App