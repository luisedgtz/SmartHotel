import React from 'react'

export default (props) => {
    return(
        <div className="cardContainer">
            <img className="roomIMG" src={props.image} alt=""></img>
            <div>
                <h3>{props.type}</h3>
            </div>
        </div>
    )
}