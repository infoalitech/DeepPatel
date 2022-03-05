import logo from './logo.svg';
import './App.css';
import Home from './home';
import Header from './Header';
import Question from './question';
import CityName from './city_name';
import Question_img from './Question_img';
import Routing from './Route';
import Error from './error';
import Login from './login';
import Waiting from './Waiting';
import { ReactDOM } from 'react';

function App() {
  return (  
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      < Home /> */}
      < Routing />
    </div>
  );
}

export default App;

