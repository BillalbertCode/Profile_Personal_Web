import './styles/App.css'
import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Inicio from './routes/Inicio'
import Contact from './routes/Contact'
import Projects from './routes/Projects'
import About from './routes/About'
import ErrorPage from './routes/ErrorPage'
import Nav from './components/Nav'
import { ThemeContext } from './context/ThemeContext'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
const App = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={theme ? "dark" : "light"}>  
      <Nav />
      <ScrollToTop/>
      <Routes >
        <Route path='/Home' element={<Inicio />}></Route>
        <Route path='/Projects' element={<Projects />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/bill' element= {<Navigate to= '/Home'/>}></Route>
        <Route path='/*' element={<ErrorPage />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}
export default App