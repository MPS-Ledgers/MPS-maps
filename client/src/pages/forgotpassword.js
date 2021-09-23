import React from 'react'
import Navi from "../components/navbar"
import Footer from "../components/footer"
import "./styles/forgotPassword.css"
import {Form,FormGroup,Label,Input,Jumbotron} from 'reactstrap'
import {Button} from 'react-bootstrap'
const forgotPassword=()=>{
    return(
            <>
                <Navi />
                <Form className="forgot-form">
                <div className="bgshade">
                <Jumbotron className="jum">
                    <h1 className="display-2 lgp">&nbsp;&nbsp;&nbsp;&nbsp;MPS MAPS</h1>
                <FormGroup>
                    <Label className="display-6 lgp">Email: </Label>
                    <Input type="email" placeholder="E-Mail"/>
                </FormGroup>
                    <Button className="btn-lg btn-primary btn-block reset-b">Reset Password</Button>
                </Jumbotron>
                </div>
                </Form>
                <div className="foot">
                    <Footer/>
                </div>
            </>
    )
}

export  default forgotPassword