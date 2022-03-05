import React from "react";
import './home.css';

function Error()
{
    return <div>
        <div className="error_img">
        <img src={require('./error.png')}/>
        </div>
        
        <div className="Error_text ">
            <h2>Lorem ipsum dolor sit amet, consectetur <br/>
                adipiscing elit, sed do eiusmod tempor incididunt <br/>
                ut labore et dolore <b>magna aliqua. At</b> urna <br/>
                condimentum mattis pellentesque id nibh tortor id. <br/>
                Condimentum id ve</h2> 

        </div>
    </div>
}
export default Error;