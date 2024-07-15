import React, { Component } from 'react';
import './ValidationSample.css';

class RefSample extends Component {
  // A 케이스
  //input = React.createRef();
  state = {
    password: '',
    clicked: false,
    validated: false,
  };
  handleChange = (e) => {
    this.setState({
      clicked: e.target.value.length === 0 ? false : this.state.clicked,
      password: e.target.value,
    });
  };
  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000',
    });
    // A 케이스
    //this.input.current.focus();
    // B 케이스
    this.input.focus();
  };
  render() {
    return (
      <div>
        <input
          // A 케이스
          //ref={this.input}
          // B 케이스
          ref={(ref) => (this.input = ref)}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          onKeyDown={(e) => {
            e.key === 'Enter' && this.handleButtonClick();
          }}
          className={
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'failure'
              : ' '
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default RefSample;
