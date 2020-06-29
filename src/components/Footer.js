import React from 'react'

import footFB from './Assets/footFB.svg'
import footInsta from './Assets/footInsta.svg'
import footLoc from './Assets/footLoc.svg'
import footMail from './Assets/footMail.svg'
import footPhone from './Assets/footPhone.svg'
import footWA from './Assets/footWA.svg'

import fotoCerro from './Assets/img1Spinner.jpg'

export default (props)=>{
    return(
        <div id="footer">


        <div className="footerContainer">
        
        <img className="fondo" src={fotoCerro} alt=""/>


            <div className="footerSection">
                <div className="location">
                    <img className="FootLoc" src={footLoc} alt=""/>
                    <div className="address">
                        <p>Carlos Salazar 2420</p>
                        <p>Col. Obrera, Monterrey N.L.</p>
                    </div>       
                </div>

                <div className="follow-us">
                    <p>Síguenos</p>
                    <div className="followUsIcons">
                        <a href="https://www.facebook.com/SMARTHOTELMONTERREY" target="_blank"><img className="footIcon" src={footFB} alt=""/></a>
                        <a href="https://www.instagram.com/smart_hotel_cintermex/?hl=es-la" target="_blank"><img className="footIcon" src={footInsta} alt=""/></a>
                    </div>
                </div>
            </div>

            <div className="footerSection">
                <p>Reservaciones:</p>
                <p>Lunes a Sábado 10:00 - 19:00 hrs</p>

                <div className="infoTag">
                    <img className="footIcon2" src={footMail} alt=""/>
                    <p>reservaciones@smarthotel.com.mx</p>
                </div>

                
                <div className="infoTag">
                    <img className="footIcon2" src={footPhone} alt=""/>
                    <p>81 2676-0305</p>
                </div>

                
                <div className="infoTag">
                    <img className="footIcon2" src={footWA} alt=""/>
                    <p>81 2437-8751</p>
                </div>

                <div className="infoTag">
                    <img className="footIcon2" src={footPhone} alt=""/>
                    <p>Recepción: 81 1845-1884</p>
                </div>
            </div>

            <div className="footerSection">
                <p>¿Cómo podemos ayudarte?</p>
                <a href="/contacto">Contáctanos {">"}</a>
                <p>Políticas y cancelaciones {">"}</p>
            </div>              
        </div>


        <div className="bottomFooter">
            <div className="bottomBtns">
                <a>Contacto</a>
                <p> | </p>
                <a>Aviso de privacidad</a>
            </div>

            <p>Copyright © 2020 SMART HOTEL</p>
        </div>
       


        </div>
    )
}