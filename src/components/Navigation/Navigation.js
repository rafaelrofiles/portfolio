import React, { Component } from 'react';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { curtainOpen: false }; 
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu = () => {
    this.setState({ curtainOpen: !this.state.curtainOpen });
  };

  render() {
    return(
      <nav className={this.state.curtainOpen ? 'curtain-menu-open' : ''}>
        <div className="curtain-menu">
          <div className="curtain"></div>
          <div className="curtain"></div>
          <div className="curtain"></div>
          <div className="curtain-menu-wrapper">
            <ul className="curtain-menu-list menu vertical">
              <li><a href="#/home" onClick={this.toggleMenu}>Under Construction</a></li>
            </ul>
          </div>
        </div>

        <div id="curtain" className="curtain-menu-button" onClick={this.toggleMenu}>
          <div className="curtain-menu-button-toggle">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;