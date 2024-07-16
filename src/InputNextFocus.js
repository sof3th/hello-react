import React, { useState } from 'react';

const InputNextFocus = (prop) => {
  const [form, setForm] = useState({
    message: '',
    nextTarget: null
  });
  const { message, nextTarget } = form;
  const handleChange = (e) => {
    setForm({
      ...form, // 기존의 form 내용을 이 자리에 복사한 뒤
      [e.target.name]: e.target.value, // 원하는 값을 덮어 씌우기
    });
  };
  const handleClick = () => {
    alert(message);
    setForm({
      message: '',
      nextTarget: null
    });
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      nextTarget.
      //handleClick();
    }
  };
  return (
    <input
      type={prop.type}
      name={prop.name}
      placeholder={prop.placeholder}
      ref={(ref) => {
        this.ref = ref;
      }}
      value={message}
      onChange={handleChange}
      onKeyDown={handleKeyPress}
    />
  );
};

export default InputNextFocus;
