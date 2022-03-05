import React from "react";
import bootstrap from "bootstrap";
import './home.css';

function Login()
{
    return <div className="container ">
        <div className="row d-flex justify-content-center ">
            <div className="col-lg-4 col-sm-6 col-6 m-4 p-4 shadow rounded-3 ">
                <br />
                <div className="form-group " >
                <input type={Text} className="form-control" placeholder="Username"/>
                </div>
                <br/>
                <div className="form-group" >
                <input type={Text} className="form-control" placeholder="Password"/>
                </div>
                <br/>
                <br />
                <div className="form-group" >
                <button  className="login btn btn-info">Login </button>
                </div>  
            </div>
        </div>

    </div>
}
export default Login;