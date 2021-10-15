import React from 'react';
import "./Header.css";


const Header = (props) => {
          return (
                    <>
                              <header  className="header text-light">
                                        <div className="title fluid">
                                                  {props.title}
                                        </div>               
                              </header>
                    </>
          )
};

export default Header;
