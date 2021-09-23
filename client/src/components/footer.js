import React from 'react'
import './footer.js'
import './styles/footer.css'
import {FaFacebook,FaCopyright,FaEnvelope,FaPhoneAlt,FaTwitter} from "react-icons/fa"
import {HiLocationMarker} from "react-icons/hi"
const Footer=()=>{
 return(
    <div className="main-footer">
        <div className="container">
        <div className="row">
            <div className="col">
                <br/>
                <h2>Mps Maps Inc</h2>
                <h4 className="list-unstyled">
                    <li><FaPhoneAlt/> 180-978-123</li>
                    <li><HiLocationMarker/> 123 East Coat Road</li>
                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chennai, India</li>
                </h4>
            </div>
            <div className="col">
                <br/>
                <h1 id="h99">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;99%</h1>
                <h4>&nbsp;&nbsp;Coverage of Busy Cities</h4>
                <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Of The World</h4>
                <p>Build with reliable, comprehensive data over <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;countries and territories.</p>
            </div>
            <div className="col">
                <br />
                <h2>Follow Us On</h2>
                <h3 className="list-unstyled">
                    <li><FaEnvelope/>&nbsp;&nbsp;&nbsp;<a className="li-con" href="mailto:mpsmaps1729@gmail.com"> Mail</a></li>
                    <li><FaFacebook/>&nbsp;&nbsp;&nbsp;<a className="li-con" href="#gyy"> Facebook</a></li>
                    <li><FaTwitter/>&nbsp;&nbsp;&nbsp;<a className="li-con" href="#ygfy"> Twitter</a></li>
                </h3>
            </div>
        </div>
        <br/>
        <hr/>
        <div className="row">
            <div>
            <p className="col pa">
                <FaCopyright/> {new Date().getFullYear()}  MPS MAPS | rights reserved | Terms Of Services | Privacy | 
            </p>
            </div>
        </div>
        </div>
    </div>
 )   
}

export default Footer;