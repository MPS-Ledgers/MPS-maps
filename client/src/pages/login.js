import React, { useEffect, useState } from "react"
import Navi from "../components/navbar"
import Footer from "../components/footer"
import "./styles/login.css"
import {Form,FormGroup,Label,Input,Jumbotron} from 'reactstrap'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios'
const Login=({history})=>{
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [error,seterror]=useState('')
    useEffect(()=>{
        if(localStorage.getItem('authToken')){
            history.push('/private')
        }
    },[history])
    const loginHandler=async(event)=>{
        event.preventDefault()
        const config={
            header:{
                "Content-Type":"application/json"
            }
        }
        try{
            const {data}=await axios.post("http://localhost:5000/api/auth/login",{email,password},config)
            localStorage.setItem("authToken",data.token)
            history.push("/private")
        }
        catch(error){
            seterror(error.response.data.error)
            setTimeout(()=>{
                seterror('')
            },1500)
        }
    }
    return(
        <>
            <Navi isLoggedIn={false}/>
            <Form className="login-form" onSubmit={loginHandler}>
            <div className="bgshade">
            <Jumbotron className="jum">
                <h1 className="display-2 lgp">&nbsp;&nbsp;&nbsp;&nbsp;MPS MAPS</h1>
                {error && <p className="error-msg">{error}</p>}
            <FormGroup>
                <Label className="display-6 lgp">Email: </Label>
                <Input type="email" value={email} onChange={(event)=>{
                    setemail(event.target.value)
                }} placeholder="E-Mail"/>
            </FormGroup>
            <FormGroup>
                <Label className="display-6 lgp" type="password">Password: </Label>
                <Input type="password" value={password} onChange={(event)=>{
                    setpassword(event.target.value)
                }} placeholder="Password"/>
            </FormGroup>
                <Button type="submit" className="btn-lg btn-primary btn-block btnncl">Login</Button>
                <div className="text-center">
                    <Link className="linlog reg lgpp" to="/register">
                        Register
                    </Link>
                    <Link className="linlog fp lgpp" to="/forgotpassword">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forgot Password???
                    </Link>
                </div>
            </Jumbotron> 
            </div>
            </Form>
            <div className="foot">
                <Footer/>
            </div>
        </>
    )
}

export default Login