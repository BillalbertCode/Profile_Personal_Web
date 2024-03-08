import '../styles/Profile.css'
import "../styles/AsideFirst.css"
import Profile from '../components/Profile'
import AsideFirst from '../components/AsideFirst'
import Skills from '../components/Skills'
import VisionSecction from '../components/VisionSecction'
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
        <div className='container skill'>
          <Skills />
        </div>
        <VisionSecction />
      </aside>
    </>
  )
}
export default Inicio