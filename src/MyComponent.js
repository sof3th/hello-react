import React, { Component } from 'react';
import PropTypes from 'prop-types';

// props는 부모로부터 전달받은 데이터, 조회만 가능
// state는 부모로부터 전달받은 데이터, 변경도 가능

// 클래스 컴포는트는 무조건 extents Component 포함, render()도 포함
// 클래스 내에서는 this 사용
class MyComponent extends Component {
  static defaultProps = {
    name: '기본 이름',
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    const { name, favoriteNumber, children } = this.props; // 비구조화 할당
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다. <br />
        children 값은 {children}
        입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}

/*
const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다. <br />
      children 값은 {children}
      입니다.
      <br />
      제가 좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
  );
};
*/
/*
const MyComponent = ({ name, children, id }) => {  
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다. <br />
      children 값은 {children} 
      입니다. <br />
			id :  {id}
    </div>
  );
};
*/
/*
const MyComponent = props => {
  const { name, children } = props;
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다. <br />
      children 값은 {children}
      입니다.
    </div>
  );
};
*/
/*
const MyComponent = (props) => {
  return (
    <div>
      안녕하세요, 제 이름은 {props.name}입니다. <br />
      children 값은 {props.children}
      입니다.
    </div>
  );
};*/
/*
MyComponent.defaultProps = {
  name: '기본 이름',
  id: 'default id',
  children: '칠드런',
};

// type이 다를경우 에러는 아니지만 경고는 나온다.(브라우저에서)
// isRequired 했는데 설정된게 없으면 에러는 아니지만 경고는 나온다.(브라우저에서)
MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};
*/

export default MyComponent;
