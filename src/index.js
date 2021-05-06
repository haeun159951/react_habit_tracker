import React from 'react';
import ReactDOM from 'react-dom'; // html과 연결하는 작업
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import SimpleHabit from './components/simpleHabit';

ReactDOM.render(
  // use strict 과 같은 기능 : 2 번씩 호출된다. 그래서 잘못된 것은 없는지 확인 가능
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
