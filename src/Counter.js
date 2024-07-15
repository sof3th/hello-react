import React, { Component } from 'react';

class Counter extends Component {
  // 생성자를 통해
  /*
  constructor(props) {
    super(props);
    // state의 초기값 설정하기
    this.state = {
      num: props.num,
      fixedNum: props.num,
    };
  }
		*/
  // 생성자 없이
  state = {
    num: this.props.num,
    fixedNum: this.props.num,
  };
	// 해야할 사항이 큰건 함수로 작성(A) ==> 여기에 함수 정의
  render() {
    const { num, fixedNum } = this.state; // state를 조회할 때는 this.state로 조회합니다.
    return (
      <div>
        <h1>{num}</h1>
        <h2>바뀌지 않는 값: {fixedNum}</h2>
        <h3>state 값: {this.state.num}</h3>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
          onClick={() => {
            this.setState(
              {
                num: num + 1,
              },
              () => {
                // 콜백함수
                console.log('방금 setState가 호출되었습니다.');
                console.log(this.state);
								// 해야할 사항이 큰건 함수로 작성(A)
              }
            );
          }}
          /*
          onClick={() => {
            this.setState((prevState) => {
              return {
                num: prevState.num + 1,
              };
            });
            this.setState((prevState) => ({
              num: prevState.num + 1,
            }));
          }}
						*/
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
          // 비동기적으로 수행됨. 아래 2개를 동기적으로 하려면? ==> 함수로!
          /*
          onClick={() => {
           	// this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.						
           	this.setState({ num: num + 1 });
           	this.setState({ num: this.state.num + 1 });
          }}
				*/
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
