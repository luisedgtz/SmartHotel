import React from 'react'
import img1 from './Assets/vector1.svg'
import img2 from './Assets/vector2.svg'

export default (props)=>{
    return(
        <div className="aboutUs">


            <div className="content">
                
                <div className="section">
                    <div>
                        <h2>¿Quiénes somos?</h2>
                        <p>
                        Somos un hotel con una imagen cómoda y fresca para quienes buscan hospedaje de calidad, 
                        con un diseño moderno, habitaciones luminosas muy bien equipadas en medio de un ambiente 
                        tranquilo en el que puedes relajarte completamente después de un largo viaje o un ajetreado
                        día de trabajo, nuestro hotel se adaptan a cada una de las necesidad del viajero de hoy que 
                        requiere Calidad, Comodidad y Conectividad.
                        </p>
                    </div>

                    <img src={img1} alt=""/>
 
                </div>
               
                <div className="section">

                    <img src={img2} alt=""/>

                    <div className="textMision">
                        <h2>Nuestra Misión</h2>
                        <p>
                        Ofrecer al viajero de negocios y placer una experiencia de viaje diferente donde 
                        ofrecemos calidad superior a la media de los hoteles con un precio más accesible, 
                        por lo que nuestra hotel ofrece al cliente mayores beneficios por el mismo costo 
                        de otros hoteles de la misma categoría, sin dejar al lado el trato personalizado.
                        </p>
                        <h2>Nuestra Visión</h2>
                        <p>
                        Revolucionar el Mercado Hotelero ofreciendo un modelo de negocio donde el bajo costo
                        de alojamiento no vaya de la mano a menores beneficios para los viajeros.
                        </p>
                    </div>


                    
                </div>

            </div>

        </div>
    )
}