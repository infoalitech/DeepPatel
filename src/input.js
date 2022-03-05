import React from "react";
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header_main from "./Header_main";

function Qinput ()
{
    return <div className="container">
        <Header_main />
        <div className="row d-flex shadow rounded-1 m-2 p-4">
            <div className="box col-sm col-md-2 mt-4 p-4  ">
               
            </div>
            <div className="heading_text col-sm mt-4 "> 
                <h1 id="heading1"> Please provide an asnwe in Yes/No?
                </h1>                           
            </div>
        </div>
        <br></br>
        <div className="d-flex justify-content-center">
            <div className="align-item-center">
            <h1>YES</h1><br />
            <h1>NO</h1><br />
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
export default Qinput;