import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Card, Nav } from "react-bootstrap";
import "./Home.css";

//Home page is the opening page is going to have our 
const Home = () =>{
          return( 
                    <div className="home-container">
                               <Header title= "Popular Titles" />
                               <div className="movie-container">
                                         <Nav.Link href="/series" className="image-container">
                                                   <Card className="card-container">
                                                             <div className="link-name">SERIES</div>
                                                            <img className="photo" alt="unavailable" src="https://assets.webiconspng.com/uploads/2017/02/Film-Slate-Icon.png" height="100" /> 
                                                   </Card >
                                                   <div className="words"><small>Popular Series </small></div>
                                         </Nav.Link>
                                         <Nav.Link href="/movies" className="image-container">
                                                   <Card className="card-container">
                                                            <div className="link-name">MOVIES</div>
                                                            <img className="photo" alt="unavailable" src="https://assets.webiconspng.com/uploads/2017/02/Film-Slate-Icon.png" height="100" /> 
                                                   </Card >
                                                   <div className="words"><small>Popular Movies </small></div>
                                         </Nav.Link>
                               </div>
                               <div className="spacer">

                               </div>
                               <Footer />
                     </div>
          )
          
}
export default Home;
