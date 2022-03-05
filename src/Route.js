import React from "react";
import { ReactDOM } from "react";
import { BrowserRouter,Link,Route,Routes } from "react-router-dom";
import Home from "./home";
import Header from './Header';
import Question from "./question";
import CityName from './city_name';
import Question_img from './Question_img';
import Error from './error';
import Login from './login';
import Waiting from './Waiting';
import Qinput from "./input";

function Routing(){
    return(
        <>
            <BrowserRouter>
                <button className="m-1">
                    <Link to="/">home </Link>
                </button>
                <button className="m-1">
                    <Link to="/question"> Question</Link>
                </button>
                <button className="m-1">
                    <Link to="/CityName"> CityName</Link>
                </button>
                <button className="m-1">
                    <Link to="/Question_img"> Question2</Link>
                </button>
                <button className="m-1">
                    <Link to="/zipcode"> Zipcode</Link>
                </button>
                <button className="m-1">
                    <Link to="/*"> Error</Link>
                </button>
                <button className="m-1">
                    <Link to="/waiting"> Waiting</Link>
                </button>
                <button className="m-1">
                    <Link to="/input"> Input YES/NO</Link>
                </button>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/question" element={<Question />}></Route>
                    <Route path="/CityName" element={<CityName Text="Enter Your City Name" />}></Route>
                    <Route path="/Question_img" element={<Question_img />}></Route>
                    <Route path="/zipcode" element={<CityName Text="Enter Your Zip Code" />}></Route>
                    <Route path="/*" element={<Error />}></Route>
                    <Route path="/Waiting" element={<Waiting />}></Route>
                    <Route path="/input" element={<Qinput />}></Route>
                </Routes>
            </BrowserRouter>
        </>
        
    )
}
export default Routing;
