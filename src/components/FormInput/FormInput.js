import React, { Component } from 'react';

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasValue: false,
      value: '',
    }
    this.handleFocus = this.handleFocus.bind(this);
  }
  
  handleFocus = (event) => {
    this.setState({ hasValue: !this.hasValue });
  };
  handleBlur = (event) => {
    if ( !this.state.value.length > 0 ) {
      this.setState({ hasValue: false });
    }
  };
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    let classes = "form-floating-label" + (this.state.hasValue ? " has-value" : "");
    switch(this.props.element) {
      case 'textarea':
        return(
          <div className={classes}>
            <textarea onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleChange}
              id={this.props.id} 
              name={this.props.name}
              value={this.state.value}
              rows={this.props.rows}
              required={this.props.required}
            />
            <label>{this.props.label}</label>
          </div>
        );
      break; // eslint-disable-line no-unreachable
      default:
        return(
          <div className={classes}>
            <input onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleChange}
              type={this.props.type} 
              id={this.props.id} 
              name={this.props.name}
              value={this.state.value}
              required={this.props.required}
            />
            <label>{this.props.label}</label>
          </div>
        );
    }
  }
}

export default FormInput;