import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Series from "./Series";
import Movies from "./Movies"
import Login from "./Login";
import './App.css';
import Navigation from './Navigation';


//App function is going to be the function that accesses all of our components.
function App() {
          
          return (
                    <div>
                              <Route path ="/" component={Navigation}/>
                              <Switch>
                                        <Route exact path = "/">
                                                  <Home/>
                                        </Route>
                                        <Route exact path = "/movies">
                                                  <Movies/>
                                        </Route>
                                        <Route exact path = "/series">
                                                  <Series/>
                                        </Route>
                                        <Route exact path ="/login">
                                                  <Login />
                                        </Route>
                              </Switch>
                    </div>
          );
}

export default App;
