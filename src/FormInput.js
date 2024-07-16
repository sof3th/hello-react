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
  handleKeyPress = (e) => {
    console.log(e);
    console.log(e.target);
    // console.log(this.idRef);
    if (e.key === 'Enter') {
      if (e.target === this.idRef) this.pwRef.focus();
      else if (e.target === this.pwRef) this.ssn1Ref.focus();
      else if (e.target === this.ssn1Ref) this.ssn2Ref.focus();
      else if (e.target === this.ssn2Ref) this.tel1Ref.focus();
      else if (e.target === this.tel1Ref) this.tel2Ref.focus();
      else if (e.target === this.tel2Ref) this.tel3Ref.focus();
      else if (e.target === this.tel3Ref) this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <center>
          <h1>회원 가입</h1>
        </center>
        <table align="center" border={1}>
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
                onKeyDown={this.handleKeyPress}
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
                onKeyDown={this.handleKeyPress}
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
                onKeyDown={this.handleKeyPress}
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
                onKeyDown={this.handleKeyPress}
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
                onKeyDown={this.handleKeyPress}
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
                onKeyDown={this.handleKeyPress}
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
                onKeyDown={this.handleKeyPress}
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
