import React, { Component } from 'react';

import IterationSample from './IterationSample';
//import FormInput from './FormInput';
//import MyComponent from './MyComponent';
//import Counter from './Counter';
//import Say from './Say';
//import EventPractice from './EventPractice';
//import ValidationSample from './ValidationSample';
//import RefSample from './RefSample';
//import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return <IterationSample />;
  }
}

/*
class App extends Component {
  render() {
    return <FormInput />;
  }
}
*/
/*
class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
        <button onClick={() => this.scrollBox.scrollToTop()}>맨 위로</button>
      </div>
    );
  }
}
  */

/*
const App = () => {
  return <RefSample />;
};
*/

/*
const App = () => {
  return <ValidationSample />;
};
*/

/*
const App = () => {
  return <EventPractice />;
};
*/

/*
const App = () => {
  return <Say />;
};
*/

/*
const App = () => {    
  let numb = 10;
  return (
    <>
      <Counter num={numb} />;
      <Counter num={numb} />;
    </>
  );
};
*/

// 컴포넌트 사이에 작성한 것 => children
/*
const App = () => {
  return (
    <MyComponent name="React" favoriteNumber={3}>
      children 리액트
    </MyComponent>
  );
};
*/

/*
const App = () => {
  return <MyComponent namea="React" ida="hhhhhhh" />;
};
*/

/*
 *  jsx 내부에서 if 사용 못함
 */
//function App() {
//return <MyComponent />;
/*
 *
 */
//const name = '리액트';
/*
  return (
    <div>
      {name === '리액트' ? (
        <h1>리액트입니다.</h1>
      ) : (
        <h2>리액트가 아닙니다.</h2>
      )}
    </div>
  );*/
// 다양한 조건문
//return <div>{name === '리액트' ? <h1>리액트입니다.</h1> : null}</div>;
//return <div>{name === '리액트' && <h1>리액트입니다.</h1>}</div>;

// undefined 는 렌더링하지 않도록 한다.
/*
  const name = undefined;
  return name || '값이 undefined 입니다';
  */

// 스타일은 camel 표기법으로 find-size => fontSize
/*
  const name = '리액트';
  const style = {
    // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성됩니다.
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px', // font-size -> fontSize
    fontWeight: 'bold', // font-weight -> fontWeight
    padding: 16 // 단위를 생략하면 px로 지정됩니다.
  };
  return <div style={style}>{name} </div>;
  */

// 스타일 직접 지정
/*
  const name = '리액트';
  return (
    <div    
      style={{
        // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성됩니다.
        backgroundColor: 'black',
        color: 'aqua', 
        fontSize: '48px', // font-size -> fontSize
        fontWeight: 'bold', // font-weight -> fontWeight
        padding: 16 // 단위를 생략하면 px로 지정됩니다.
      }}
    >      
      {name}
      
      <input />
    </div>
  );
  */
//}

/*
 * 요소는 1개만 가능
 */
/* 
function App() {
  return (
    <div>
      <h1>리액트 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </div>
  )
}
*/

/* 
import logo from './logo.svg';
import './App.css';

function App() {
  // rendering 할 내용
  // jsx 코드
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.12 한글
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

// 외부에서 사용할 수 있도록 export
// default를 빼려면 {App} 으로 해야함.
export default App;
//export {App};
// import 할때도 {APP} 해야함
