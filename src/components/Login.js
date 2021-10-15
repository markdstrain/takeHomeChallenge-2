import React, { useState, useRef } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form, Button, Card, Container } from 'react-bootstrap';
import Api from '../api';
import Header from './Header';
import Footer from './Footer';


function Login() {
   
    const [login, setLogin] = useState(false)
    const usernameRef = useRef();
    const passwordRef = useRef();
    
   
    function handleSubmit(e) {
        e.preventDefault()
          
        const info = Api.login({"username": usernameRef.current.value, "password": passwordRef.current.value})
        if(info){
                  setLogin(true);
        }
        }  
    
    if (login === true){
             return  <Redirect push to="/"/>
    };
   

    return (
        <>
            <Header title="Login"/>
            <Container className="d-flex align-items-center justify-content-center mt-5"
                style={{ maxHeight: "100vh" }}>
                          
              <div className="w-100" style={{ maxWidth: '400px'}}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-1">Log In</h2>
                            
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="username">
                                    <Form.Label>User Name:</Form.Label>
                                    <Form.Control type="username" ref={usernameRef} required/>
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control type = "password" ref={passwordRef} required />
                                </Form.Group>
                                <Button className="w-100 mt-2" type="submit">Log In</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
            <div className="w-100 text-center mt-4 mb-5">
                Don't Have an Account? <Link to="/signup" >Sign Up</Link>
            </div>
           
            <Footer />
        </>
    )
}

export default Login;