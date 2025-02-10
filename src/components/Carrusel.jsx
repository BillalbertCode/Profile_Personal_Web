// Carrousel Usado Para mostrar los proyectos
import ImageLoader from "./ImageLoader"

const Carrusel = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <ImageLoader src="/bill/assets/jobChatbotIA/heroJobChatbot.webp" className="object-fit-cover w-100" alt="Job Chatbot IA" />
                    <div className="carousel-caption d-block">
                        <a href="https://job-chatbot-ia.vercel.app/">
                            <h5>Job Chatbot IA  <span>(Geminis IA)</span></h5>
                            <p >Un pequeño chatbot inteligente dispuesto a ayudarte con tu trabajo.</p>
                        </a>
                    </div>
                </div>
                <div className="carousel-item">
                    <ImageLoader src="/bill/assets/raicesWorkSpace/Home.png" className="object-fit-cover w-100" alt="RaicesWorkSpace" />
                    <div className="carousel-caption d-block">
                        <a href="https://raicesworkspace.vercel.app" className="">
                            <h5>Raices Work Space  <span>(RWS)</span></h5>
                            <p >Raíces, una plataforma WorkSpace para compartir tus pensamientos y creaciones con la comunidad.</p>
                        </a>
                    </div>
                </div>
                <div className="carousel-item">
                    <ImageLoader src="/bill/src/Ruletacapture.png" className="object-fit-cover w-100" alt="1" />
                    <div className="carousel-caption d-block">
                        <a href="https://bill.caribito.com/bill/Ruleta/">
                            <h5>Ruleta  <span>(Custom Random Results)</span></h5>
                            <p >Ruleta de 4 segmentos, personalizable.</p>
                        </a>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div >
    )
}

export default Carrusel