import './styles/home.css'
import {Jumbotron} from 'reactstrap'
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navi from '../components/navbar'
import Footer from '../components/footer'
import { Link } from 'react-router-dom'
const Home=()=>{
    return(
        <>
        <Navi isLoggedIn={false}/>
        <div id="mpsm">
            <Jumbotron fluid>
                <div id="jum">
                    <h1>Welcome to</h1>
                    <h1 className="display-1">MPS MAPS</h1>
                    <h1>Command Control Center</h1>
                    <h2>It's all about saving lives</h2>
                    <Link to="/login">
                    <Button className="btn btn-lg btn-primary btn-block" id="bt">Login</Button>
                    </Link>
                </div>
            </Jumbotron>  
        </div>
        <div className="foot">
            <Footer/>
        </div>
        </>
    )
}

export default Home