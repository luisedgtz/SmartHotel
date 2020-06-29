import React from 'react'
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker
} from 'react-google-maps'

const Map = (props)=>{
    return(
        <GoogleMap 
        defaultZoom={18}
        defaultCenter={{lat: 25.679613,lng:-100.290719}}
        >
            <Marker position={{lat: 25.679605,lng:-100.290718}}/>
        </GoogleMap>
    )
}

export default withScriptjs(
    withGoogleMap(
        Map
    )
)