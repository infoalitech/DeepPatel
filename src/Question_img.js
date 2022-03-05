import React from "react";
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header_main from "./Header_main";

function Question_img ()
{
    return <div className="container">
        <Header_main />
        <div className="row d-flex shadow rounded-3 m-2 p-4">
            <div className="box col-sm col-md-4 mt-4 p-4  ">
               
            </div>
            <div className="heading_text col-sm mt-4 "> 
                <h1 id="heading1">
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                </h1>                           
            </div>
        </div>
        <br />
        <div className="row">
            
            <div className="col d-flex justify-content-center ">
                <input type={Text} placeholder="Type or Select an Option" className="input_text"/>
            </div>
        </div>
        <br />
        <div className="row p-3 ">
            <div className="img_grid col-sm col-lg-2 shadow rounded-3 m-3 ">
                <div className="img shadow m-3">

                </div>
                <h3 className="option">option</h3>
            </div>
            &nbsp; &nbsp;
            <div className="img_grid col-sm col-lg-2 shadow rounded-3 m-3 ">
                <div className="img shadow m-3">

                </div>
                <h3 className="option">option</h3>
            </div>
            &nbsp; &nbsp;
            <div className="img_grid col-sm col-lg-2 shadow rounded-3 m-3 ">
                <div className="img shadow m-3">

                </div>
                <h3 className="option">option</h3>
            </div>
            &nbsp; &nbsp;
            <div className="img_grid col-sm col-lg-2 shadow rounded-3 m-3 ">
                <div className="img shadow m-3">

                </div>
                <h3 className="option">option</h3>
            </div>
            &nbsp; &nbsp;
            <div className="img_grid col-sm col-lg-2 shadow rounded-3 m-3 ">
                <div className="img shadow m-3">

                </div>
                <h3 className="option">option</h3>
            </div>
            &nbsp; &nbsp;
            

        </div>
        <br />
    </div>
}
export default Question_img;