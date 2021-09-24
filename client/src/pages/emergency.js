import React,{useState} from 'react'
import axios from 'axios'
import './styles/emergency.css'
import Navi from '../components/navbar'
import Footer from '../components/footer'
import { Jumbotron } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
let latitude,longitude,hospitallat,hospitallong
const Emergency=()=>{
    let lat,long
    const [nearesthosp,setNearestHosp]=useState()
    const [address,setAddress]=useState()
    const [title,setTitle]=useState()
    const [hospitalgeocoordinates,setHospitalGeoCoordinates]=useState()
    const reportHandler=async()=>{
        navigator.geolocation.getCurrentPosition(async(pos)=>{
            const config={
                body:{
                    'Content-Type':'application/json'
                }
            }
            longitude=pos.coords.longitude
            latitude=pos.coords.latitude
            lat=latitude
            long=longitude
            const url="https://discover.search.hereapi.com/v1/discover?at="+latitude+","+longitude+"&q=hospital&apiKey="+process.env.React_App_HERE_API_KEY
            const response=await axios.get(url)
            const url1="https://discover.search.hereapi.com/v1/discover?at="+latitude+","+longitude+"&q=policestation&apiKey="+process.env.React_App_HERE_API_KEY
            const response1=await axios.get(url1)
            const obj={'title':response.data.items[0].title,'address':response.data.items[0].address.label,'userlat':lat,'userlng':long,'police':response1.data.items[0].address.label}
            axios.post('/api/emergency',obj,config)
            setNearestHosp('Nearest Hospital details : ')
            setTitle("Name: "+response.data.items[0].title)
            hospitallat=response.data.items[0].position.lat
            hospitallong=response.data.items[0].position.lng
            setHospitalGeoCoordinates("Latitude: "+hospitallat+", Longitude: "+hospitallong)
            setAddress("Address: "+response.data.items[0].address.label)
        },(error)=>alert(error.message))
    }
    return(
        <>
            <Navi isLoggedIn={true}/>
            <div className="bgshade">
            <Jumbotron fluid>
                <h2 className="display-5 repo">Report Accidents in your location!!! Save Life</h2>
                <p className="pa display-6"> Accidents occur every 60 secs. Please help us to save them</p>
            </Jumbotron>
            <Button type="submit" className="btn-lg btn-primary btrh" onClick={reportHandler}>Report</Button>
            <div className="bghosp">
            <h1 className="hosp">{nearesthosp}</h1>
            <h2 className="hosp">{title}</h2>
            <h4 className="hosp">{address}</h4>
            <h5 className="hosp">{hospitalgeocoordinates}</h5>
            </div>
            </div>
            <Footer />
        </>
    )
}

export default Emergency 