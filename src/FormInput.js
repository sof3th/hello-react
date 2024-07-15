import React, { Component } from 'react';

class FormInput extends Component {
  state = {
    id: '',
    pw: '',
    ssn1: '',
    ssn2: '',
    tel1: '',
    tel2: '',
    tel3: '',
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleClick = () => {
    alert(
      '아이디 : ' +
        this.state.id +
        '\n' +
        '비밀번호 : ' +
        this.state.pw +
        '\n' +
        '주민번호 : ' +
        this.state.ssn1 +
        '-' +
        this.state.ssn2 +
        '\n' +
        '전화번호 : ' +
        this.state.tel1 +
        '-' +
        this.state.tel2 +
        '-' +
        this.state.tel3
    );
    this.setState({
      id: '',
      pw: '',
      ssn1: '',
      ssn2: '',
      tel1: '',
      tel2: '',
      tel3: '',
    });
  };
  idHandleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.pwRef.focus();
    }
  };
  pwHandleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.ssn1Ref.focus();
    }
  };
  ssn1HandleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.ssn2Ref.focus();
    }
  };
  ssn2HandleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.tel1Ref.focus();
    }
  };
  tel1HandleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.tel2Ref.focus();
    }
  };
  tel2HandleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.tel3Ref.focus();
    }
  };
  tel3HandleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };
  render() {
    return (
      <div>
        <h1>회원 가입</h1>
        <table border={1}>
          <tr>
            <td>아이디</td>
            <td>
              <input
                type="text"
                name="id"
                placeholder="아이디"
                ref={(ref) => {
                  this.idRef = ref;
                }}
                value={this.state.id}
                onChange={this.handleChange}
                onKeyDown={this.idHandleKeyPress}
              />
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <input
                type="password"
                name="pw"
                placeholder="패스워드"
                ref={(ref) => {
                  this.pwRef = ref;
                }}
                value={this.state.pw}
                onChange={this.handleChange}
                onKeyDown={this.pwHandleKeyPress}
              />
            </td>
          </tr>
          <tr>
            <td>주민번호</td>
            <td>
              <input
                type="text"
                name="ssn1"
                placeholder="앞자리6자리"
                ref={(ref) => {
                  this.ssn1Ref = ref;
                }}
                value={this.state.ssn1}
                onChange={this.handleChange}
                onKeyDown={this.ssn1HandleKeyPress}
              />
              -
              <input
                type="text"
                name="ssn2"
                placeholder="뒷자리7자리"
                ref={(ref) => {
                  this.ssn2Ref = ref;
                }}
                value={this.state.ssn2}
                onChange={this.handleChange}
                onKeyDown={this.ssn2HandleKeyPress}
              />
            </td>
          </tr>
          <tr>
            <td>전화번호</td>
            <td>
              <input
                type="text"
                name="tel1"
                placeholder="3자리"
                ref={(ref) => {
                  this.tel1Ref = ref;
                }}
                value={this.state.tel1}
                onChange={this.handleChange}
                onKeyDown={this.tel1HandleKeyPress}
              />
              -
              <input
                type="text"
                name="tel2"
                placeholder="4자리"
                ref={(ref) => {
                  this.tel2Ref = ref;
                }}
                value={this.state.tel2}
                onChange={this.handleChange}
                onKeyDown={this.tel2HandleKeyPress}
              />
              -
              <input
                type="text"
                name="tel3"
                placeholder="4자리"
                ref={(ref) => {
                  this.tel3Ref = ref;
                }}
                value={this.state.tel3}
                onChange={this.handleChange}
                onKeyDown={this.tel3HandleKeyPress}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2} align="center">
              <button onClick={this.handleClick}>확인</button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default FormInput;
