// Componentes
import Profile from '../components/Profile'
import AsideFirst from '../components/AsideFirst'
import Skills from '../components/Skills'
import VisionSecction from '../components/VisionSecction'
// Estilos
import '../styles/Profile.css'
import "../styles/AsideFirst.css"
export const Inicio = () => {
  return (
    <>
      <main className='flex-initial'>
        <Profile />
      </main>
      <aside >
        <div className='container asidefirst flex-initial'>
          <AsideFirst />
        </div>
        <div className='container skill user-select-none'>
          <Skills />
        </div>
        <VisionSecction />
      </aside>
    </>
  )
}
export default Inicio