import React from 'react'

export default (props)=>{
    return (
        <div className="roomContainer">

            <div className="imgContainerRoom">
                <img src={props.imgsrc} alt=""/>
            </div>

            <div className="textContainerRoom">
                <h4>{props.type}</h4>
                <p>{props.text}</p>
                <h5>$Tarifa desde ${props.price} Pesos</h5>
            </div>
        </div>
    )
}