import React from "react";

import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";


export default class Home extends React.Component{
    render()
    {
         
        return(
            <div >
                <Header />
                <div className="Heading_text">
                                <h1 id="heading1">
                                    Lorem ipsum dolor sit amet
                                </h1>
                                <h2 id="heading2">
                                    Lorem ipsum dolor sit amet
                                </h2>
                            </div>
                
                <div className="container">
                    <div className="row">
                        <div className="col-sm mb-4">
                            <button type="button"className="btn btn-secondary  btn-block w-100">Option 2</button>
                              
                        </div>
                
                        <div className="col-sm mb-4">
                             <button type="button"className="btn btn-secondary btn-block w-100">Option 2</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm mb-4">
                            <button type="button"className="btn btn-secondary btn-block w-100">Option 2</button>
                           
                        </div>
                        
                        <div className="col-sm mb-4">
                             <button type="button"className="btn btn-secondary btn-block w-100">Option 2</button>
                        </div>
                        
                    </div>
                    
                    
                    <div className="row">
                        <div className="col-sm mb-4">
                            <button type="button"className="btn btn-secondary btn-block w-100">Option 2</button>
                              
                        </div>
                        <div className="col-sm mb-4" >
                             <button type="button"className="btn btn-secondary btn-block w-100">Option 2</button>
                        </div>
                    </div>
                   
                    <div className="row">
                        <div className="col-sm mb-4">
                            <button type="button"className="btn btn-secondary btn-block w-100">Option 2</button>
                              
                        </div>
                        <div className="col-sm mb-4">
                             <button type="button"className="btn btn-secondary btn-block w-100">Option 2</button>
                        </div>
                    </div>
                    
                </div>
                <div className="fooder">
                    <br></br>
                    <br></br>
                </div>
            </div>
        )
    }
}
