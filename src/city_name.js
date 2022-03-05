import React from "react";
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header_main from "./Header_main";
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
function CityName (prop)
{
    return <div className="container">
        <Header_main />
        <div className="row d-flex shadow rounded-1 m-2 p-4">
            <div className="box col-sm col-md-2 mt-4 p-4  ">
               
            </div>
            <div className="heading_text col-sm mt-4 "> 
                <h1 id="heading1">
                {prop.Text}
                </h1>                           
            </div>
        </div>
        <br></br>
        <div className="d-flex justify-content-center">
            <div className="align-item-center">
            <input className="input_text " type={Text} placeholder="Type your answer"/>
            </div>
            
        </div>
            <br />
            <br />
        <div className="butn d-flex justify-content-center">
                <button type="button" className="">NEXT</button>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
    </div>
}
export default CityName;