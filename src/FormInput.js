//import React, { Component } from 'react';
import React, { useEffect, useRef, useState } from 'react';
import useInputs from './useInputs';

const FormInput = () => {
  const [form, dispatch] = useInputs({
    id: '',
    pw: '',
    ssn1: '',
    ssn2: '',
    tel1: '',
    tel2: '',
    tel3: '',
  });

  const { id, pw, ssn1, ssn2, tel1, tel2, tel3 } = form;
  const idRef = useRef(null);
  const pwRef = useRef(null);
  const ssn1Ref = useRef(null);
  const ssn2Ref = useRef(null);
  const tel1Ref = useRef(null);
  const tel2Ref = useRef(null);
  const tel3Ref = useRef(null);
  useEffect(() => {
    idRef.current.focus();
  }, []);
  const handleClick = () => {
    alert(
      '아이디 : ' +
        id +
        '\n' +
        '비밀번호 : ' +
        pw +
        '\n' +
        '주민번호 : ' +
        ssn1 +
        '-' +
        ssn2 +
        '\n' +
        '전화번호 : ' +
        tel1 +
        '-' +
        tel2 +
        '-' +
        tel3
    );
    dispatch({type : 'reset_form'});
    idRef.current.focus();
  };
  const onChangeForm = (e) => {
    dispatch({type : 'change_form', form : e.target});
  }
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (e.target === idRef.current) pwRef.current.focus();
      else if (e.target === pwRef.current) ssn1Ref.current.focus();
      else if (e.target === ssn1Ref.current) ssn2Ref.current.focus();
      else if (e.target === ssn2Ref.current) tel1Ref.current.focus();
      else if (e.target === tel1Ref.current) tel2Ref.current.focus();
      else if (e.target === tel2Ref.current) tel3Ref.current.focus();
      else if (e.target === tel3Ref.current) handleClick();
    }
  };

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
              ref={idRef}
              value={id}
              onChange={onChangeForm}
              onKeyDown={handleKeyPress}
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
              ref={pwRef}
              value={pw}
              onChange={onChangeForm}
              onKeyDown={handleKeyPress}
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
              ref={ssn1Ref}
              value={ssn1}
              onChange={onChangeForm}
              onKeyDown={handleKeyPress}
            />
            -
            <input
              type="text"
              name="ssn2"
              placeholder="뒷자리7자리"
              ref={ssn2Ref}
              value={ssn2}
              onChange={onChangeForm}
              onKeyDown={handleKeyPress}
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
              ref={tel1Ref}
              value={tel1}
              onChange={onChangeForm}
              onKeyDown={handleKeyPress}
            />
            -
            <input
              type="text"
              name="tel2"
              placeholder="4자리"
              ref={tel2Ref}
              value={tel2}
              onChange={onChangeForm}
              onKeyDown={handleKeyPress}
            />
            -
            <input
              type="text"
              name="tel3"
              placeholder="4자리"
              ref={tel3Ref}
              value={tel3}
              onChange={onChangeForm}
              onKeyDown={handleKeyPress}
            />
          </td>
        </tr>
        <tr>
          <td colSpan={2} align="center">
            <button onClick={handleClick}>확인</button>
          </td>
        </tr>
      </table>
    </div>
  );
};

// class FormInput extends Component {
//   state = {
//     id: '',
//     pw: '',
//     ssn1: '',
//     ssn2: '',
//     tel1: '',
//     tel2: '',
//     tel3: '',
//   };
//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };
//   handleClick = () => {
//     alert(
//       '아이디 : ' +
//         id +
//         '\n' +
//         '비밀번호 : ' +
//         pw +
//         '\n' +
//         '주민번호 : ' +
//         ssn1 +
//         '-' +
//         ssn2 +
//         '\n' +
//         '전화번호 : ' +
//         tel1 +
//         '-' +
//         tel2 +
//         '-' +
//         tel3
//     );
//     this.setState({
//       id: '',
//       pw: '',
//       ssn1: '',
//       ssn2: '',
//       tel1: '',
//       tel2: '',
//       tel3: '',
//     });
//   };
//   handleKeyPress = (e) => {
//     console.log(e);
//     console.log(e.target);
//     // console.log(this.idRef);
//     if (e.key === 'Enter') {
//       if (e.target === this.idRef) this.pwRef.focus();
//       else if (e.target === this.pwRef) this.ssn1Ref.focus();
//       else if (e.target === this.ssn1Ref) this.ssn2Ref.focus();
//       else if (e.target === this.ssn2Ref) this.tel1Ref.focus();
//       else if (e.target === this.tel1Ref) this.tel2Ref.focus();
//       else if (e.target === this.tel2Ref) this.tel3Ref.focus();
//       else if (e.target === this.tel3Ref) this.handleClick();
//     }
//   };

//   render() {
//     return (
//       <div>
//         <center>
//           <h1>회원 가입</h1>
//         </center>
//         <table align="center" border={1}>
//           <tr>
//             <td>아이디</td>
//             <td>
//               <input
//                 type="text"
//                 name="id"
//                 placeholder="아이디"
//                 ref={(ref) => {
//                   this.idRef = ref;
//                 }}
//                 value={id}
//                 onChange={this.handleChange}
//                 onKeyDown={this.handleKeyPress}
//               />
//             </td>
//           </tr>
//           <tr>
//             <td>비밀번호</td>
//             <td>
//               <input
//                 type="password"
//                 name="pw"
//                 placeholder="패스워드"
//                 ref={(ref) => {
//                   this.pwRef = ref;
//                 }}
//                 value={pw}
//                 onChange={this.handleChange}
//                 onKeyDown={this.handleKeyPress}
//               />
//             </td>
//           </tr>
//           <tr>
//             <td>주민번호</td>
//             <td>
//               <input
//                 type="text"
//                 name="ssn1"
//                 placeholder="앞자리6자리"
//                 ref={(ref) => {
//                   this.ssn1Ref = ref;
//                 }}
//                 value={ssn1}
//                 onChange={this.handleChange}
//                 onKeyDown={this.handleKeyPress}
//               />
//               -
//               <input
//                 type="text"
//                 name="ssn2"
//                 placeholder="뒷자리7자리"
//                 ref={(ref) => {
//                   this.ssn2Ref = ref;
//                 }}
//                 value={ssn2}
//                 onChange={this.handleChange}
//                 onKeyDown={this.handleKeyPress}
//               />
//             </td>
//           </tr>
//           <tr>
//             <td>전화번호</td>
//             <td>
//               <input
//                 type="text"
//                 name="tel1"
//                 placeholder="3자리"
//                 ref={(ref) => {
//                   this.tel1Ref = ref;
//                 }}
//                 value={tel1}
//                 onChange={this.handleChange}
//                 onKeyDown={this.handleKeyPress}
//               />
//               -
//               <input
//                 type="text"
//                 name="tel2"
//                 placeholder="4자리"
//                 ref={(ref) => {
//                   this.tel2Ref = ref;
//                 }}
//                 value={tel2}
//                 onChange={this.handleChange}
//                 onKeyDown={this.handleKeyPress}
//               />
//               -
//               <input
//                 type="text"
//                 name="tel3"
//                 placeholder="4자리"
//                 ref={(ref) => {
//                   this.tel3Ref = ref;
//                 }}
//                 value={tel3}
//                 onChange={this.handleChange}
//                 onKeyDown={this.handleKeyPress}
//               />
//             </td>
//           </tr>
//           <tr>
//             <td colSpan={2} align="center">
//               <button onClick={this.handleClick}>확인</button>
//             </td>
//           </tr>
//         </table>
//       </div>
//     );
//   }
// }

export default FormInput;
