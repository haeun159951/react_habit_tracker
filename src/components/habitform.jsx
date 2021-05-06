import React, { memo } from 'react';

// 함수형 : props 가 변경되지 않으면, pure component가 변경되지 않을떄 memo를 사용해라

const Habitform = memo((props) => {
  // input field 받아 왓는데, 리액트에서는, ref 라는것이 있다.
  //dom요소에 접근해서, 그요소 value나 클릭이벤트 접근했던것 처럼
  // 필요할떄 createRef멤버 변수 선언하고, 전달하면 된다
  const inputRef = React.createRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    inputRef.current.value = '';
  };

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <input
        className='input-habit'
        ref={inputRef}
        type='text'
        placeholder='Habit'
      />
      <button className='habit-add'>Add</button>
    </form>
  );
});

export default Habitform;
