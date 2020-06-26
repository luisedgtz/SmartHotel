import React from 'react'

import SearchEngine from './SearchEngine'
import HotelCarousell from './HotelCarousell'
import RoomCard from './RoomCard'
import ServiceCard from './ServiceCard'

import img1 from './Assets/sencilla.jpg'
import img2 from './Assets/doble.jpg'
import img3 from './Assets/suite.jpg'

import icon1 from './/Assets/wifi.svg'
import icon2 from './Assets/tele.svg'
import icon3 from './Assets/card.svg'
import icon4 from './Assets/travel.svg'
import icon5 from './Assets/laundry.svg'

export default (props)=>{
    return(
        <div className="Home">
            <SearchEngine></SearchEngine>
            <HotelCarousell>    </HotelCarousell>
            <h1>HABITACIONES</h1>

            <div className="roomCardContainer">
                <RoomCard image={img1} type="HABITACIÓN SENCILLA"></RoomCard>
                <RoomCard image={img2} type="HABITACIÓN DOBLE"></RoomCard>
                <RoomCard image={img3} type="SMART SUITE"></RoomCard>
            </div>

            <h1>NUESTROS SERVICIOS</h1>

            <div className="servicesContainer">
                <ServiceCard sIcon={icon1} sType="Wifi de Cortesía"></ServiceCard>
                <ServiceCard sIcon={icon2} sType="Televisión por cable"></ServiceCard>
                <ServiceCard sIcon={icon3} sType="Aceptamos Tarjetas de Crédito"></ServiceCard>
                <ServiceCard sIcon={icon4} sType="Agencia de Viajes"></ServiceCard>
                <ServiceCard sIcon={icon5} sType="Lavandería ($)"></ServiceCard>
            </div>

            <hr></hr>            
        </div>
    )
}