import React from "react";
import Header_main from "./Header_main";
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate } from 'react-router-dom';

function Question ()
{
    const navigate = useNavigate();
    return <div className="container">
        < Header_main />
        <>
      <h1>Contact Page</h1>
      <br />
      <h1 onClick={() => navigate(-1)}>Go Back</h1>
    </>
        
        <div className="row d-flex shadow rounded-3 m-2 p-4">
            <div className="box col-sm col-md-4 mt-4 p-4  ">
               
            </div>
            <div className="heading_text col-sm mt-4 "> 
                <h1 id="heading1">
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                </h1>                           
            </div>
        </div>
        <br></br>
        <div className="d-flex justify-content-center w-100">
            <div className="align-item-center">
            <input type={Text} placeholder="Type or Select an Option" className="input_text"/>
            <hr/>
                    <ul type="none">
                        <li>Option</li>
                        <li>Option</li>
                        <li>Option</li>
                        <li>Option</li>
                        <li>Option</li>
                    </ul>
            </div>
            
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
    </div>
}
export default Question;