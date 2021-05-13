import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import SignIn from './containers/Login/SignIn';
import HeaderContainer from './containers/Base/HeaderContainer'
import ChatRoom from './containers/ChatRoom/ChatRoom'
import Home from './containers/Base/Home';

import axios from "axios";

axios.defaults.baseURL = "https://www.abc.com";
axios.defaults.withCredentials = true;

function App() {

  return (
    <Router>
        <Route path="/" component={HeaderContainer}/>
        <Route exact path="/SignIn" component={SignIn}/>
        <Route exact path="/Chat" component={ChatRoom}/>
        <Route exact path="/Home" component={Home}/>
    </Router>
  );
}

export default App;
