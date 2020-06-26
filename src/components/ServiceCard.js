import React from 'react'

export default (props)=>{
    return(
        <div className="sContainer">
            <img src={props.sIcon} alt=""></img>
            <p>{props.sType}</p>
        </div>
    )
}