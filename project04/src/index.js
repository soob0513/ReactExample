import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

// =====================[STEP 1. state관리]===========================
// 1) useState 개념 
// import App from './example/Ex01';

// 2) useState 실습 : 좋아요
// import App from './example/Ex02';
// import App from './example/Ex02retry';

// 3) useState 실습 : 랜덤게임
// import App from './example/Ex03';

// 4) useState 실습 : 주사위게임
// import App from './example/Ex04';
// import App from './example/Ex04선생님';

// 5) useEffect 기초
// import App from './example/Ex05';

// 6) input태그 다루기
//import App from './example/Ex06';

// 7) Map, filter 다루기
// import App from './example/Ex07';

// 8) todo list
// import App from './example/Ex08';
// import App from './example/Ex08선생님';


// =====================[STEP 2. 데이터 관리]===========================
// 9) 양방향 데이터 전달
import App from './example/Ex09';




import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
