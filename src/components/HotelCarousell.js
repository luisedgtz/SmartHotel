import React from 'react'

import img1 from './Assets/img1Spinner.jpg'
import img2 from './Assets/FotosHotel/1.jpg'
import img3 from './Assets/img2Spinner.jpg'
import img4 from './Assets/img3Spinner.jpg'


export default (props)=>{
    return(
        <div className="carouselContainer">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img id="cerro" src={img1} className="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
                <h5>LA MEJOR UBICACIÓN</h5>
                <p>A tan solo unos pasos de Parque Fundidora, Cintermex, Arena Monterrey, Paseo Santa Lucia, Plaza Sésamo <br></br> y a solo 10 minutos del centro de Monterrey...</p>
            </div>
            </div>

            <div className="carousel-item">
            <img id="habitaciones" src={img2} className="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
                <h5>HABITACIONES PRÁCTICAS</h5>
                <p>Amplias habitaciones con servicio de cable, aire acondicionado, wifi, una mezcla perfecta <br></br>de calidad, confort y conectividad</p>
            </div>
            </div>

            <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..."/>
            </div>

            <div className="carousel-item">
            <img src={img4} className="d-block w-100" alt="..."/>
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
        </div>
        
        </div>
    )
}