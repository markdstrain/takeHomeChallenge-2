import React, {  useEffect } from 'react';
import Footer from "./Footer";
import { Container, Card, Nav } from 'react-bootstrap';

import Header from "./Header";
import { useData } from './hooks';
import "./Series.css"


//Series we're going to make an axios call eventually to an api but for our sake we just collect the data
//from json file.
//filter the data that are series.

const Movies = () =>{
          const [series, getSeries, isLoading] = useData("movie");
          
          useEffect(()=>{
                    getSeries();
                    console.log(series)
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                },[]);
          
          return(
                    <>      
                              {isLoading && 
                                         <>
                                                  <Header title= "Popular Movies" />
                                                  <div className="loading"><p>Loading...</p></div>
                                                  <Footer />
                                         </>  
                              }
                              {!isLoading &&
                                        <>
                                                  <Header title= "Popular Movies" />
                                                  <Container className="video-container">
                                                             {series.map(show => 
                                                            <Nav.Link key ={show.title} className="video-link">
                                                                      <Card  className="video-card border-0">
                                                                                <img alt= "noImage" src = {show.images["Poster Art"].url} height ="200"/>
                                                                      </Card>
                                                                      <div className="text-dark text-container">
                                                                                <small>{show.title}</small>
                                                                      </div>
                                                            </Nav.Link>
                                                            
                                                            )}
                                                  </Container>
                                                 <Footer />
                                        </>
                             }
                    </>
          )
};
          
export default Movies;