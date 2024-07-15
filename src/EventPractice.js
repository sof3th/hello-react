import React, { useState } from 'react'; // 함수형
//import React, { Component } from 'react'; // 클래스형

// 함수형 컴포넌트 (입력 변수 객체로 생성)
const EventPractice = () => {
  const [form, setForm] = useState({
    username: '',
    message: '',
  });
  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form, // 기존의 form 내용을 이 자리에 복사한 뒤
      [e.target.name]: e.target.value, // 원하는 값을 덮어 씌우기
    };
    setForm(nextForm);

    //setForm({
    //  ...form, // 기존의 form 내용을 이 자리에 복사한 뒤
    //  [e.target.name]: e.target.value, // 원하는 값을 덮어 씌우기
    //});
  };
  const onClick = () => {
    alert(username + ': ' + message);
    setForm({
      username: '',
      message: '',
    });
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChange}
        onKeyDown={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

// 함수형 컴포넌트 (입력 변수 각각 함수 생성)
/*
const EventPractice = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onClick = () => {
    alert(username + ': ' + message);
    setUsername('');
    setMessage('');
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChangeUsername}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChangeMessage}
        onKeyDown={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};
*/
// 클래스형 컴포넌트
/*
class EventPractice extends Component {
  state = {
    username: '',
    message: '',
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleClick = () => {
    alert(this.state.username + ':' + this.state.message);
    this.setState({
      username: '',
      message: '',
    });
  };
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}
*/
/*
class EventPractice extends Component {
  state = {
    message: '',
  };
  // 함수 생성시 () => 방법으로 하면 bind가 불필요하다
  handleChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };
  handleClick = () => {
    alert(this.state.message);
    this.setState({
      message: '',
    });
  };
  // 함수 생성시 일반 적인 방법으로 했을경우 모든 함수에 대해 생성자에 this를 bind해줘야 한다.
  
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e) {
    this.setState({
      message: e.target.value,
    });
  }
  handleClick() {
    alert(this.state.message);
    this.setState({
      message: '',
    });
  }
	
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}
*/
/*
class EventPractice extends Component {
  state = { message: '' };
  render() {
    return (
      <div>
        <h1>이벤트 연습 - {this.state.message}</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={(e) => {
            this.setState({ message: e.target.value });
            console.log('e.target.value : ' + e.target.value);
						// setState는 비동기적으로 실행되므로 아래 this.state.message는 이전 값으로 되어있음.
            console.log('this.state.message : ' + this.state.message);
          }}
        />
        <button
          onClick={() => {
            alert(this.state.message);
            this.setState({
              message: '',
            });
          }}
        >
          확인
        </button>
      </div>
    );
  }
}
*/

export default EventPractice;
