import FormContact from "../components/FormContact";
import SocialNetworks from "../components/SocialNetworks";
import '../styles/Contact.css'
export const Contact = () => {
  return (
    <>
      <div className="all">
        <div className="informacion">
          <h2>Información de contacto</h2><hr />
          <div>
            <h5>Dirección</h5>
            <p> Miranda, Venezuela</p>
          </div>
          <div>
            <h5>Teléfono</h5>
            <p>+58 (414) 2240292</p>
          </div>
          <div>
            <h5>Correo Electronico</h5>
            <p>BillalbertCode@gmail.com</p>
          </div>
          <div>
            <h5>Redes Sociales</h5>
            <p>@BillalbertCode</p>
            <SocialNetworks />
          </div>
        </div>
        <FormContact />
      </div>
    </>
  )
}
export default Contact