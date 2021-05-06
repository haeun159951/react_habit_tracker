// import React, { useCallback, useState } from 'react';

// //클래스가 아니라 함수이다.
// // 코드블럭 전체가 반복되어진다.

// const SimpleHabit = () => {
//   const [count, setCount] = useState(0); //0으로 초기화
//   //state={count:0,};

//   const spanRef = useRef(); // react.createRef();
//   const handleIncrement = useCallback(() => {
//     setCount(count + 1);
//   });

//   return (
//     <li className='habit'>
//       <span ref={spanRef} className='habit-name'>
//         Reading
//       </span>
//       <span className='habit-count'>{count}</span>
//       <button className='habit-button habit-increase' onClick={handleIncrement}>
//         <i className='fas fa-plus-square'></i>
//       </button>
//     </li>
//   );
// };

// export default SimpleHabit;
