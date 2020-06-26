import React from 'react'

import Phone from './Assets/phoneSVG.svg'
import SearchScript from '../scripts/SearchScript'


export default (props)=>{
    return(
        <div className="SearchBar">

            <div className="SearchEngine">
                <SearchScript></SearchScript>            
            </div>

            <div className="SearchMessage">
                <div>

                <div className="contact-us">
                    <p>Si deseas reservar más de 3 habitaciones</p>
                </div>
                <div className="contact-us">
                    <img src={Phone} alt=""></img>
                    <h4>Contáctanos (81) 2676 0305</h4>
                </div>

                </div>
               
            </div>
        </div>
    )
}