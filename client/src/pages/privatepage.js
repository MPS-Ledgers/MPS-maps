import { useState, useEffect } from "react";
import axios from "axios";
import "./styles/privatepage.css";
import Navi from "../components/navbar";
import Footer from "../components/footer";
import { Jumbotron} from "react-bootstrap";
let longitude,latitude,count=0
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
    const config={
      body:{
          'Content-Type':'application/json'
      }
    }
    const url="http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid="+process.env.React_App_Weather_API
    await axios.get(url).then((response)=>{
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
    const bbox=""+(longitude-0.1)+","+(latitude-0.1)+","+(longitude+0.1)+","+(latitude+0.1)+""
    const trurl="https://api.tomtom.com/traffic/services/5/incidentDetails?key="+process.env.React_App_Traffic+"&bbox="+bbox+"&fields={incidents{type,geometry{type,coordinates},properties{id,iconCategory,magnitudeOfDelay,events{description,code},from,to,length,delay,aci{probabilityOfOccurrence,numberOfReports,lastReportTime}}}}&language=en-GB&timeValidityFilter=present"
    const respond=await axios.get(trurl)
    const incidents=respond.data.incidents
    for(let i=0;i<incidents.length;i++){
      if(incidents[i].properties.events[0].description==="Accident"){
        count=count++;
        const a= incidents[i].geometry.coordinates[0]
        const accidentlat=a[0]
        const accidentlong=a[1]
        const url5="https://discover.search.hereapi.com/v1/discover?at="+accidentlong+","+accidentlat+"&q=hospital&apiKey="+process.env.React_App_HERE_API_KEY
        const response5=await axios.get(url5)
        const url6="https://discover.search.hereapi.com/v1/discover?at="+accidentlong+","+accidentlat+"&q=policestation&apiKey="+process.env.React_App_HERE_API_KEY
        const response6=await axios.get(url6)
        const obj={'title':response5.data.items[0].title,'address':response5.data.items[0].address.label,'userlat':accidentlat,'userlng':accidentlong,'police':response6.data.items[0].address.label}
        axios.post('/api/emergency',obj,config)
      }
    }
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