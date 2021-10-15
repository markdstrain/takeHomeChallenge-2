import React from 'react'
import {  Nav, Navbar } from 'react-bootstrap';
import './Navigation.css';

const Navigation = () => {
          return (
                    <>
                              <Navbar className="head">
                                        <Nav className="container">
                                                  <Nav.Link href="/" className="raleway text-light" >
                                                            DEMO Streaming
                                                  </Nav.Link>
                                                  <Nav >
                                                  
                                                  </Nav>
                                                  <Nav>
                                                           <Nav.Link href="/login" className="login text-light">
                                                                     Log in
                                                           </Nav.Link>
                                                           <Nav.Link href="/register" className="free text-light">
                                                                      Start your free trial
                                                           </Nav.Link>
                                                  </Nav>
                                        </Nav>
                              </Navbar>              
                    </>
          )
}
export default Navigation
