import React, { useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id
  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId, // nextId 값을 id로 설정하고
      text: inputText,
    });
    setNames(nextNames); // names 값을 업데이트한다.
    setNextId(nextId + 1); // nextId 값에 1을 더해 준다.
    setInputText(''); // inputText를 비운다.
  };
  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (inputText.length > 0) onClick();
      else alert('내용을 입력하세요');
    }
  };
  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };
  // names가 변경되었으니 아래 사항(const nameList)도 re 랜더링이 된다!!!
  const namesList = names.map((name) => (
    <tr key={name.id}>
      <td>{name.text}</td>
      <td>
        <button onClick={() => onRemove(name.id)}>-</button>
      </td>
    </tr>
  ));
  return (
    <div>
      <input
        type="text"
        placeholder="입력하세요"
        value={inputText}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <button onClick={onClick}>추가</button>
      <table border={1}>
        <thead>
          <th>이름</th>
          <th>삭제</th>
        </thead>
        <tbody>{namesList}</tbody>
      </table>
    </div>
  );
};

/*
const IterationSample = () => {
  const objs = [
    { name: '눈사람', dept: 'A팀' },
    { name: '얼음', dept: 'B팀' },
    { name: '눈', dept: 'A팀' },
    { name: '바람', dept: 'C팀' },
  ];
  const objList = objs.map((obj, index) => (
    // key값을 좀 더 효율적인 방법으로 할당할 필요, index는 좋은 선택이 아님
    <tr key={index}>
      <td>{obj.name}</td>
      <td>{obj.dept}</td>
    </tr>
  ));
  return (
    <table border="1">
      <thead>
        <th>이름</th>
        <th>소속</th>
      </thead>
      <tbody>{objList}</tbody>
    </table>
  );
};
*/

export default IterationSample;
