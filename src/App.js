import React, { Component } from 'react';
import './App.css';

import Navigation from './components/Navigation/Navigation';

import Home from './pages/Home';
import Contact from './pages/Contact';

class App extends Component {
  render() {
    return (
      <div className="test">
        
          <Navigation />

          <header>
            <div className="row">
              <div className="medium-12 columns text-center">
                <h1>Header</h1>
              </div>
            </div>
          </header>

          <div className="main">
            <Home />
            <Contact />
          </div>

        
      </div>
    );
  }
}

export default App;
