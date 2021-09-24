import React, {useRef} from 'react'
import './styles/traffic.css'
import Navi from '../components/navbar'
import Footer from '../components/footer'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
import  './styles/maps.css'
mapboxgl.accessToken = "pk.eyJ1IjoiaWFtbW9uaWVzaDIwOCIsImEiOiJja3RpOTV0aTIwemlzMm9udTNoY2F4YXY2In0.bLr25gpTuI9Z525EL8zkRA"
let longitude,latitude
const Maps=()=>{
    const mapContainer = useRef(null)
    const map = useRef(null)
    navigator.geolocation.getCurrentPosition(async(pos)=>{
        longitude=pos.coords.longitude
        latitude=pos.coords.latitude
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            zoom: 11,
            center: [longitude, latitude]
        })
        map.current.addControl(
            new MapboxDirections({
                accessToken: mapboxgl.accessToken
            }),
            'top-left'
        );
    },(error)=>alert(error.message))
    
    return(
        <>
            <Navi isLoggedIn={true}/>
            <div ref={mapContainer} id="map"></div>
            <Footer/>
        </>
    )
}

export default Maps