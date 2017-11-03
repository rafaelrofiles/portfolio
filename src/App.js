import React, { Component } from 'react';
import './App.css';

import Navigation from './components/Navigation/Navigation';

import Home from './pages/Home';
import Contact from './pages/Contact';

class App extends Component {
  render() {
    return (
      <div>
          <Navigation />
          <div id="main" className="grid-container">
            <div className="grid-x grid-padding-x align-center-middle" style={{height: '100vh'}}>
              <div className="auto cell"></div>
              <div className="medium-8 cell">
                <Home />
                <Contact />
              </div>
              <div className="auto cell"></div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
