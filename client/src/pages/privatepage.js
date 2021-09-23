import { useState, useEffect } from "react";
import axios from "axios";
import "./styles/privatepage.css";
import Navi from "../components/navbar";
import Footer from "../components/footer";
import { Jumbotron} from "react-bootstrap";
const PrivatePage = ({history}) => {
  const [error, setError] = useState("");
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
        await axios.get("http://localhost:5000/api/private",config)
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