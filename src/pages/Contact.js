import React, { Component } from 'react';

import FormInput from '../components/FormInput/FormInput';

class Contact extends Component {
  render() {
    return(
      <form action="https://www.enformed.io/8atsy3me" method="POST">
        <h3 className="text-center">Send me a message</h3>
        <div className="row">
          <div className="medium-12 columns">
            <FormInput
              element="input"
              type="email"
              id="email"  
              name="email"
              required={true}
              label="Email Address"
            />
          </div>
          <div className="medium-12 columns">
            <FormInput
              element="textarea"
              rows="5"
              id="message"
              name="message"
              required={true}
              label="Message"
            />
          </div>
        </div>
        <div className="medium-12 columns">
          <input type="hidden" name="*honeypot" />
          <input type="hidden" name="*formname" value="GithubPortfolioForm" />
          <input type="submit" className="button hollow expanded" value="Submit" />
        </div>
      </form>
    );
  }
}

export default Contact;