import '../styles/Profile.css'
import "../styles/AsideFirst.css"
import Profile from '../components/Profile'
import AsideFirst from '../components/AsideFirst'
import Skills from '../components/Skills'
import VisionSecction from '../components/VisionSecction'
export const Inicio = () => {
  return (
    <>
      <main>
        <Profile />
      </main>
      <aside >
        <div className='container asidefirst'>
          <AsideFirst />
        </div>
        <div className='container skill'>
          <Skills />
        </div>
        <VisionSecction />
      </aside>
    </>
  )
}
export default Inicio