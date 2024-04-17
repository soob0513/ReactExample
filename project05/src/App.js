import './App.css';
import { Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import MyPage from './pages/MyPage';
import About from './pages/About';
import Product from './pages/Product';
import NotFound from './pages/NotFound';

function App() {

  /** React Router
   *   - 사용자가 요청한 URL에 따라 해당 URL에 맞는 페이지를 보여주는 역할
   * 
   * 1) React Router 설치
   *    - npm i react-router-dom
   * 
   * 2) BrowserRouter
   *    - App 전체를 감싸줘야함 
   *    - 보통은 index.js로 이동해서 APP을 BrowserRouter로 감싸준다. 
   *    - 브라우저의 주소를 감지하는 역할 ★ 매우 중요!!
   * 
   * 3) 내가 이동할 페이지들을 준비
   *    - pages 폴더에 About.jsx / Main.jsx / MyPage.jsx / Product.jsx / NotFound.jsx
   * 
   * 4) Routes - Route 
   *    - Routes : 여러 Route (경로) 를 감싸서 가지고 있다가, 
   *               사용자가 요청한 조건에 맞는 Route가 있을 때, 그 Route를 렌더링해준다. 
   *    - Route : 여러 Route (경로) 
   *    - 과거에는 Routes가 Switch라는 이름으로 사용
   *    - Route 필수 속성 2가지 : path, element
   *       - path (경로) : 사용자가 이렇게 url을 요청했을 때~
   *       - element (컴포넌트) : 어떤 컴포넌트를 보여줄 것인가?
   */ 

  return (
    <div>
      <h1>React Router 학습하기</h1>

      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/mypage' element={<MyPage/>}></Route>
        <Route path='/product/:num' element={<Product/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
