import React from "react";


function Waiting ()
{
    return <div>
        <div className="waiting_img">
        <img src={require('./waiting.png')}/>
        </div>
        
        <div className="waiting_text ">
            <h2>Pundits are computing your response to give you</h2> 
            <h1><b>the best asnwer...</b></h1>

        </div>
    </div>
}
export default Waiting;