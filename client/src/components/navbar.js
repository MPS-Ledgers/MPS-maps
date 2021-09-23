import React, { useState } from 'react'
import {Button,Nav,Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import mps from '../images/mps.png'
import './styles/navbar.css'
import {Link} from 'react-router-dom'
const Navi=(props)=>{
    const[notLogged,setnotLogged]=useState('')
    const logoutHandler=()=>{
        localStorage.removeItem("authToken")
    }
    const clickHandler=()=>{
        setnotLogged('Log in to continue...')
        setTimeout(()=>{
            setnotLogged('')
        },1000)
    }
    if(!props.isLoggedIn){
    return(
        <>
        <Navbar bg="dark" variant="dark" sticky="top" fixed="top">
            <Navbar.Brand>
                <Link to="/">
                <img src={mps} height={50} width={100} alt="logo"/>
                </Link>
            </Navbar.Brand>
            <Nav>
                <Nav.Item className="hovblack na">
                    <Link className="tecl" to="/" onClick={clickHandler}>
                     Maps
                    </Link>
                </Nav.Item>
                <Nav.Item className="hovblack na">
                    <Link className="tecl" to="/"onClick={clickHandler}>
                    Emergency
                    </Link>
                </Nav.Item>
                <Nav.Item className="hovblack na">
                    <Link className="tecl" to="/"onClick={clickHandler}>
                    Traffic
                    </Link>
                </Nav.Item>
                <Nav.Item className="hovblack na">
                    <Link className="tecl" to="/" onClick={clickHandler}>
                    About&nbsp;Us
                    </Link>
                </Nav.Item>
                <Nav.Item className="nav-link-btn nab" id="nav-link-login">
                    <Link to="/login">
                    <Button className="btn btn-primary">Login</Button>
                    </Link>
                </Nav.Item>
                <Nav.Item className="nav-link-btn nab">
                    <Link to="/register">
                    <Button className="btn btn-danger">Register</Button>
                    </Link>
                </Nav.Item>
            </Nav>
        </Navbar>
        <h4 className="lostyle">{notLogged}</h4>
        </>
    )}
    return(
        <Navbar bg="dark" variant="dark" sticky="top" fixed="top">
        <Navbar.Brand>
            <Link to="/private">
            <img src={mps} height={50} width={100} alt="logo"/>
            </Link>
        </Navbar.Brand>
        <Nav>
            <Nav.Item className="hovblack na">
                <Link className="tecl" to="/private/maps">
                 Maps
                </Link>
            </Nav.Item>
            <Nav.Item className="hovblack na">
                <Link className="tecl" to="/private/emergency">
                Emergency
                </Link>
            </Nav.Item>
            <Nav.Item className="hovblack na">
                <Link className="tecl" to="/private/traffic">
                Traffic
                </Link>
            </Nav.Item>
            <Nav.Item className="hovblack na">
                <Link className="tecl" to="/about">
                About&nbsp;Us
                </Link>
            </Nav.Item>
            <Nav.Item className="nav-link-btn logoutbt">
                    <Link to="/">
                    <Button onClick={logoutHandler} className="btn btn-danger">Logout</Button>
                    </Link>
            </Nav.Item>
        </Nav>
    </Navbar>
    )
}

export default Navi