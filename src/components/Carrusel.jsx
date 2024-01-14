import ImageLoader from "./ImageLoader"

const Carrusel = () => {
    return (
        <>
            <div id="" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
                </div> 
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <a href="https://bill.caribito.com/bill/Ruleta/">
                            <ImageLoader src="http://bill.caribito.com/bill/src/Ruletacapture.png" className="d-block w-100" alt="1" />
                        </a>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Ruleta  <span>(Custom Random Results)</span></h5>
                            <p>Ruleta de 4 segmentos, personalizable.</p>
                        </div>
                    </div>
                    {/* <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div> */}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden"  >Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carrusel
