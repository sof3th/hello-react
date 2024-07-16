import React, { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = (numbers) => {
  console.log('평균값 계산 중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const inputEl = useRef(null);
  const id = useRef(1);
  const setId = (n) => {
    id.current = n;
  };
	const printId = () => {
		console.log(id.current);
	}
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성
  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber('');
      inputEl.current.focus();
    },
    [number, list]
  );
  const onKeyDown = (e) => {
    if (e.key === 'Enter') onInsert(e);
  };
  const avg = useMemo(() => getAverage(list), [list]);
  return (
    <div>
      <input
        value={number}
        onChange={onChange}
        onKeyDown={onKeyDown}
        ref={inputEl}
      />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b>
        {avg}
        {/* <b>평균값:</b> {getAverage(list)} */}
      </div>
    </div>
  );
};

export default Average;
