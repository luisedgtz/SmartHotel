import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  } from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div  className="PageWrapper">

        <Router>
          <Header></Header>
          <Switch>
            <div>
              <Route exact path="/" component={Home}></Route>
            </div>
          </Switch>

        </Router>
      </div>
      
      <Footer></Footer>

    </div>
  );
}

export default App;
