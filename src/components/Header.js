import React from 'react'

import Logo from './Assets/SHvector.svg'
import {NavLink} from 'react-router-dom'

export default (props)=>{
    return(
        <div className="HeaderContainer">
            <div className="NavContainer">
                <div className="logoContainer">
                    <a className="logo" href="/"><img src={Logo} height="100" alt=""></img></a>
                </div>

                <div className="NavTagsContainer">
                    <ul id="NavTags" className="NavTags">
                        <li className="tag">
                            <NavLink activeStyle={{color: "#10345C"}} exact to="/">HOME</NavLink>
                        </li>

                        <li className="tag">
                            <NavLink activeStyle={{color: "#10345C"}} exact to="/nosotros">NOSOTROS</NavLink>
                        </li>

                        <li className="tag">
                            <NavLink activeStyle={{color: "#10345C"}} exact to="/habitaciones">HABITACIONES</NavLink>
                        </li>

                        <li className="tag">
                            <NavLink activeStyle={{color: "#10345C"}} exact to="/galeria">GALERÍA</NavLink>
                        </li>

                        <li className="tag">
                            <NavLink activeStyle={{color: "#10345C"}} exact to="/ubicacion">UBICACIÓN</NavLink>
                        </li>

                        <li className="tag">
                            <NavLink activeStyle={{color: "#10345C"}} exact to="/contacto">CONTACTO</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}