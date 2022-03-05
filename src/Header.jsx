import React from "react";
import { ReactDOM } from "react";
import bootstrap from "bootstrap";
import './home.css';

function Header ()
        {
            return  <div>
                        <div className="header">
                            <img src={require('./ask.png')} />
                        </div>
                        
                        <br />
                    </div>
        }
export default Header;