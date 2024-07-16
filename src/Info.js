import React, { useState, useEffect, useReducer } from 'react';
import useInputs from './useInputs';

// function reducer(state, action) {
//   console.log(action);
//   return {
//     ...state,
//     [action.name]: action.value,
//   };
// }

const Info = () => {
  const [form, onChange] = useInputs({ name: '', nickname: '' });
  // const [form, dispatch] = useReducer(reducer, { name: '', nickname: '' });
  // const [form, setForm] = useState({ name: '', nickname: '' });
  // const changeValue = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };
  const { name, nickname } = form;
  // const onChange = (e) => {
  //   dispatch(e.target);
  // };
  // useEffect(() => {
  //   console.log('렌더링이 완료되었습니다!(마운팅,렌더링,언마운팅)');
  //   console.log(form);
  // });
  // useEffect(() => {
  //   console.log('렌더링이 완료되었습니다!(마운트에만)');
  //   console.log(form);
  // }, []);
  // useEffect(() => {
  //   console.log('렌더링이 완료되었습니다!(name 변경시에만)');
  //   console.log(form);
  // }, [form]);
  // useEffect(() => {
  // 	// 랜더링 또는 마운트 이후에 실행
  //   console.log('effect');
  //   console.log(form);
  // 	// return 이하는 랜더링 또는 언마운팅 이전에 실행
  //   return () => {
  //     console.log('cleanup');
  //     console.log(form);
  //   };
  // });
  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

// const Info = () => {
//   const [name, setName] = useState('');
//   const [nickname, setNickname] = useState('');
//   const onChangeName = (e) => {
//     setName(e.target.value);
//   };
//   const onChangeNickname = (e) => {
//     setNickname(e.target.value);
//   };
//   return (
//     <div>
//       <div>
//         <input value={name} onChange={onChangeName} />
//         <input value={nickname} onChange={onChangeNickname} />
//       </div>
//       <div>
//         <div>
//           <b>이름:</b> {name}
//         </div>
//         <div>
//           <b>닉네임:</b> {nickname}
//         </div>
//       </div>
//     </div>
//   );
// };

export default Info;
