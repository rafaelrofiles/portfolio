import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasValue: false
    }
  }
  render() {
    const focusIn = () => {
      this.state = { hasValue: true };
    };

    return(
      <form action="https://www.enformed.io/8atsy3me" method="POST">
        <div className="row">

          <div className="small-12 column">
            <div className="form-floating-label">
              <input type="email" id="email" name="email" required
                    onClick={focusIn} 
                    className={this.state.hasValue ? "has-value" : ""} />
              <label>Email float up</label>
            </div>
          </div>

          <div className="small-12 column">
            <div className="form-floating-label">
              <input type="text" id="password" name="password" />
              <label>Float password up</label>
            </div>
          </div>

          <div className="small-12 column">
            <div className="form-floating-label">
              <input type="tel" id="tel" name="tel" />
              <label>Float phone up</label>
            </div>
          </div>

          <div className="small-12 column">
            <div className="form-floating-label">
              <textarea name="" id="" rows="5" placeholder=""></textarea>
              <label>Float textarea up</label>
            </div>
          </div>
          
        </div>
      </form>
    );
  }
}

export default Contact;