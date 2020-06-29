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
import AbousUs from './components/AbousUs';
import Rooms from './components/Rooms';
import Gallery from './components/Gallery';
import Location from './components/Location';

function App() {
  return (
    <div className="App">
      <div  className="PageWrapper">

        <Router>
          <Header></Header>
          <Switch>
            <div>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/nosotros" component={AbousUs}></Route>
              <Route exact path="/habitaciones" component={Rooms}></Route>
              <Route exact path="/galeria" component={Gallery}></Route>
              <Route exact path="/ubicacion" component={Location}></Route>
            </div>
          </Switch>

        </Router>
      </div>
      
      <Footer></Footer>

    </div>
  );
}

export default App;
