import logo from './logo.svg';
import './App.css';

// JSX 문법 : Javascript와 html을 구분없이 한번에 사용할 수 있는 문법
// 규칙1 : 사용자 정의 태그(컴포넌트)에서 출력하고자 하는 내용은 반드시 하나의 태그로 묶여있어야 한다!
// 규칙2 : 표현식 {}를 이용해서 Javascript에 있는 데이터를 출력(사용)할 수 있다.
    // ----> if, for 사용불가! => 삼항 연산자 사용
// 규칙3 : JSX에서는 class 라는 키워드 대신 className 이라는 키워드를 사용한다!
// 규칙4 : JSX에서는 반드시 여는 태그와 닫는 태그가 존재한다
    // <input>, <br>, <hr> 등 홀태그도 반드시 닫는 태그를 적어주어야한다

function App() {

  let name = "민지";
  let myStyle = {
    backgroundColor: 'cornflowerblue',
    color : 'whitesmoke'
  }


  // JSX실습과제
  let name2 = prompt("이름을 입력해주세요");
    // 프롬프트가 두 번 실행되는데 index.js 파일에서 <React.StrictMode> 태그를 지워주면 됨
  let date = new Date();

  let year = date.getFullYear();
  let month = date.getMonth();      // getMonth() : 0 ~ 11
  let day = date.getDate()+1;
  let season = '';
  
    // if, for은 return 안에만 사용 불가
  if (3<= month <= 5){
    season = '봄';
  }else if (6<= month<= 8){
    season = '여름';
  }else if (9<=month<=11){
    season = '가을';
  }else {
    season = '겨울';
  }

    // 선생님
    // if (month == '3' || month == '4' ||month == '5'){
    //   season = "봄"
    // }else if(month == '6'||month == '7'|| month == '8'){
    //   season = "여름"
    // }else if (month == '9'|| month == '10'|| month =='11'){
    //   season = "가을"
    // }else if (month == '12'|| month == '1'||month == '2'){
    //   season = "겨울"
    // }

  return (      //  이 안에 html문서가 들어있음 => 전달받으려면 하나의 태그로 묶여있어야 함!
      
    // <h1>
    //   <div>
    //     {/* 
    //     name에 있는 값이 '지유' 라면 '지유 React 첫시작'
    //     '지유'가 아니라면 'Reason🎇'
    //     */}
    //     {name == "지유"? <h1 className="myName">{name}의 React 첫 시작</h1> 
    //     :
    //     <h1>Reason🎇</h1>
    //     }
    //     {/* JSX에서 태그에 바로 스타일을 적용시켜줄 때는 Javascript 객체 형식으로 적용해주어야한다 */}
    //     <h1 style={{backgroundColor:'black',color:'red'}}>Masion</h1> 
    //     <input></input>
    //   </div>
    //   <div>
    //     <h1 style={myStyle}>VISION</h1> 
    //     <h1>Bon Voyage</h1> 
    //   </div>
    // </h1>


    // JSX 실습문제
    <div>
      <h1>JSX DATE 실습</h1>
      <h1>{year}.{month}.{day}.</h1>
      <hr></hr>
      <p>{name2}님 지금은 {season}입니다. 좋은 하루 보내세요!</p>
    </div>
  );
}

export default App;
