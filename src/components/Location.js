import React from 'react'
import Map from './Map'

import credentials from '../credentials';

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`


export default (props)=>{
    return(
        <div className="mapContainer">

            <div className="mapText">
                <h1>Dirección</h1>
                <p>Carlos Salazar 2420. Col. Obrera. Monterrey, N.L</p>
            </div>
            <Map
                googleMapURL= {mapURL}
                containerElement= {<div style={{height: '30vw',width: '50%',margin: 'auto'}}/>}
                mapElement= {<div style={{height:'100%'}}/>}
                loadingElement= {<p>Cargando</p>}
            />
        </div>
    )
}