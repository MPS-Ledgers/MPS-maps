import { useState, useEffect } from "react";
import axios from "axios";
import "./styles/privatepage.css";
import Navi from "../components/navbar";
import Footer from "../components/footer";
import { Jumbotron} from "react-bootstrap";
require('dotenv').config()
let longitude,latitude
const PrivatePage = ({history}) => {
  const [weatherheader,setWeatherHeader]=useState('')
  const [name,setName]=useState('')
  const [country,setCountry]=useState('')
  const [visibility,setVisibility]=useState('')
  const [weather,setWeather]=useState('')
  const [resMessage,setResMessage]=useState('')
  navigator.geolocation.getCurrentPosition(async(pos)=>{
    longitude=pos.coords.longitude
    latitude=pos.coords.latitude
    const url="http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid="+process.env.React_App_Weather_API
    console.log(url)
    axios.get(url).then((response)=>{
      setWeatherHeader('Weather Update')
      setVisibility(response.data.visibility)
      setWeather("Weather Now : "+response.data.weather[0].description)
      setCountry(response.data.sys.country)
      setName("Area : "+ response.data.name+" "+country)
      if(visibility>5000){
        setResMessage(visibility+' => Clear Visibility \n Have a good drive')
      }
      else if(visibility>2000){
        setResMessage(visibility+" => Moderate Visibility \n Have a carefull drive ")
      }
      else{
        setResMessage(visibility+"=> Very low visibility \n Advised to not drive")
      }
    })
  },(error)=>alert(error.message))
  const [error, setError] = useState("")
  useEffect(() => {
    if(!localStorage.getItem('authToken')){
      history.push('/')
    }
    const fetchPrivateData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };
      try {
        await axios.get("/api/private",config)
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };

    fetchPrivateData();
  }, [history]);
  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <>
        <Navi isLoggedIn={true}/>
        <div id="mpsm">
            <Jumbotron fluid>
                <div id="jum">
                <div className="fltleft">
                  <h1>{weatherheader}</h1>
                  <h3>{name}</h3>
                  <h5>{resMessage}</h5>
                  <h5>{weather}</h5>
                </div>
                    <h1>Welcome to</h1>
                    <h1 className="display-1">MPS MAPS</h1>
                    <h1>Command Control Center</h1>
                    <h2>It's all about saving lives</h2>
                </div>
            </Jumbotron>  
        </div>
        <div className="foot">
          <Footer/>
        </div>
    </>
  );
};

export default PrivatePage;