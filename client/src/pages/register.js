import React, { useState ,useEffect} from "react"
import Navi from "../components/navbar"
import Footer from "../components/footer"
import "./styles/register.css"
import {Form,FormGroup,Label,Input,Jumbotron} from 'reactstrap'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from "axios"
const Register=({history})=>{
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [confirmpassword,setconfirmpassword]=useState('')
    const [error,seterror]=useState('')
    useEffect(()=>{
        if(localStorage.getItem('authToken')){
            history.push('/private')
        }
    },[history])
    const registerHandler=async(event)=>{
        event.preventDefault()
        const config={
            header:{
                "Content-Type":"application/json"
            }
        }
        if(password!==confirmpassword){
            setpassword('')
            setconfirmpassword('')
            setTimeout(()=>{
                seterror('')
            },1500)
            return seterror('Passwords donot match!!!')
        }
        try{
            const {data}=await axios.post("http://localhost:5000/api/auth/register",{email,password},config)
            localStorage.setItem("authToken",data.token)
            history.push("/private")
        }
        catch(error){
            if(password.length<6){
                seterror("Password should have atleast 6 characters")
            }
            else{
                seterror(error.response.data.error)
            }
            setTimeout(()=>{
                seterror('')
            },1500)
        }
    }
    return(
        <>
            <Navi isLoggedIn={false}/>
            <Form className="register-form" onSubmit={registerHandler}>
            <div className="bgshade">
            <Jumbotron className="jum">
                <h1 className="display-2 lgpp">&nbsp;&nbsp;&nbsp;&nbsp;MPS MAPS</h1>
                {error && <p className="error-msg">{error}</p>}
            <FormGroup >
                <Label className="display-6 lgpp">Email: </Label>
                <Input type="email" required value={email} onChange={(event)=>{
                    setemail(event.target.value)
                    console.log(email)
                    }} placeholder="E-Mail"/>
            </FormGroup>
            <FormGroup>
                <Label className="display-6 lgpp" type="password">Password: </Label>
                <Input type="password" required value={password} onChange={(event)=>{
                    setpassword(event.target.value)
                    console.log(password)
                    }} placeholder="Password"/>
            </FormGroup>
            <FormGroup>
                <Label className="display-6 lgpp" type="password">Confirm Password: </Label>
                <Input type="password" required value={confirmpassword} onChange={(event)=>{setconfirmpassword(event.target.value)}} placeholder="Confirm Password"/>
            </FormGroup>
            <FormGroup>
                <Button type="submit" className="btn-lg btn-primary btn-block btnncl">Sign Up</Button>
            </FormGroup>
                <div className="text-center alg">
                <Link className="linlog reg lgpp" to="/login">
                     Already have an account? Login
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

export default Register