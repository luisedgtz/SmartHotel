import React from 'react'

import img1 from './Assets/sencilla.jpg'
import img2 from './Assets/doble.jpg'
import img3 from './Assets/suite.jpg'
import RoomCard2 from './RoomCard2'


const type1 = "Habitación Sencilla"
const text1 = " Habitación con 1 cama, aloja máximo dos personas, cuenta con servicio de cable, aire acondicionado, baño, área de trabajo, secadora de cabello, Pantalla HD LED, espejo de vanidad."
const price1 = "799"

const type2 = "Habitación Doble"
const text2 = "Habitación con 2 camas, aloja máximo cuatro personas, cuenta con servicio de cable, aire acondicionado, baño, área de trabajo, secadora de cabello, Pantalla HD LED, espejo de vanidad."
const price2 = "999"

const type3 = "Smart Suite"
const text3 = "Habitación muy amplia con Cama King Size aloja máximo dos personas, cuenta con servicio de cable, aire acondicionado, baño, área de trabajo, secadora de cabello, Pantalla HD LED 43”, espejo de vanidad."
const price3 = "999"


export default (props)=>{
    return(
        <div className="roomsContainer">
            <RoomCard2 imgsrc={img1} type={type1} text={text1} price={price1}></RoomCard2>
            <RoomCard2 imgsrc={img2} type={type2} text={text2} price={price2}></RoomCard2>
            <RoomCard2 imgsrc={img3} type={type3} text={text3} price={price3}></RoomCard2>
        </div>
    )
}