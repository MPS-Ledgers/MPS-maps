import React, {useRef} from 'react'
import axios from 'axios'
import './styles/traffic.css'
import Navi from '../components/navbar'
import Footer from '../components/footer'
import mapboxgl from 'mapbox-gl'
require('dotenv').config()
mapboxgl.accessToken = process.env.React_App_MAP_BOX_TOKEN
let incidenttData,latitude,longitude,data2=[],data3
const Traffic = () => {
    const mapContainer = useRef(null)
    const map = useRef(null)
    navigator.geolocation.getCurrentPosition(async(pos)=>{
        longitude=pos.coords.longitude
        latitude=pos.coords.latitude
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            zoom: 12,
            center: [longitude, latitude]
        })
        const config={
            body:{
                'Content-Type':'application/json'
            }
        }
        axios.post("http://localhost:5000/api/traffic/send",{latitude,longitude},config)
        try {
            axios.get("http://localhost:5000/api/traffic/recieve").then((response) => {
                    incidenttData = response.data.incidentData.incidents
                    loadMap(incidenttData)
            })
            const loadMap = (plot) => {
                let idd="route"
                map.current.on('load',()=>{
                    for(let i=0;i<plot.length;i++){
                        let idx=idd+i
                        let coord
                        let plt={'type':plot[i].type,
                            'properties':{
                                    'description':plot[i].properties.events[0].description
                                },
                            'geometry':plot[i].geometry
                        } 
                        coord=plt.geometry.coordinates[0]
                        if(!map.current.getSource(idx))
                        map.current.addSource(idx,{
                            'type':'geojson',
                            'data':plt
                        })
                        let desc=plot[i].properties.events[0].description
                        if(!map.current.getLayer(idx))
                        map.current.addLayer({
                            'id':idx,
                            'type': 'line',
                            'source': idx,
                            'layout': {
                                'line-join': 'round',
                                'line-cap': 'round',
                                
                            },
                            'paint': {
                                'line-color': '#FC0B03',
                                'line-width': 8
                            }
                        })
                        
                        let plt2={'type':plot[i].type,
                            'properties':{
                                    'description':desc
                                },
                            'geometry':{
                                'type':"Point",
                                'coordinates':coord
                            }
                            }
                        data2.push(plt2)
                        console.log(plt2)
                        
                    }
                    data3={
                        'type': 'FeatureCollection',
                        'features':data2
                    };
                    
                            map.current.addSource('places', {
                                'type': 'geojson',
                                'data': data3
                                });
                                 
                                map.current.addLayer({
                                'id': 'places',
                                'type': 'symbol',
                                'source': 'places',
                                'layout': {
                                'text-field': ['get', 'description'],
                                'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
                                'text-radial-offset': 0.5,
                                'text-justify': 'auto',
                                },
                                'paint': {
                                    'text-color': '#C50ADE '
                                }
                                });

                })
            }
        }
        catch(error) {
            alert(error.message)
        }
    },
    (error)=>alert(error.message))
    return (
        <div className="traffic">
            <Navi isLoggedIn={true} />
            <div ref={mapContainer} className="tr"></div>
            <Footer />
        </div>
    )
}

export default Traffic