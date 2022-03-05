import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Home from './home';
// import Header from './Header';
// import Question from './question';
// import CityName from './city_name';
// import Question_img from './Question_img';
// import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  
  <React.StrictMode>
    
        <App />
        {/* <Header />
        <Home />
        <Header />
        <Question />
        <Header />
        <Question_img />
        <Header />
        <CityName Text="Enter Your City Name"/> */}
    
  </React.StrictMode>,
  document.getElementById('root')
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
