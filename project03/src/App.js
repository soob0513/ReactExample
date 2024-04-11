import './App.css';
import MenuBox from './components/MenuBox';
// import 별칭 from 경로
import Member from './components/Member';
import Member2 from './components/Member2';

function App() {
  /* 
    컴포넌트(Components) : 리액트로 만들어진 앱을 이루는 최소 단위
                          반복되는 코드를 하나로 묶어서 컴포넌트로 만든다.
                          내가 원하는 코드를 묶어서 '태그화' 시킨다. 
                          ★ 반드시!! 대문자로 시작 => 기존 HTML 태그들과의 구분

      - 컴포넌트 생성 방법 (새로운 파일)
      Case 1) 함수 작성, return문 작성, export 작성
      Case 2) EXTENSION 설치
            - rafce + Enter   => (React Arrow Function Componets Enter)
  */
  /* 
    프로퍼티(props)
    - 상위 컴포넌트에서 하위 컴포넌트로 값을 전달할 때 사용

    - 상위 컴포넌트 문법
    <하위컴포넌트이름 속성="값" 속성={변수} />
    ** 컴포넌트는 무조건 대문자로 시작

    - 하위 컴포넌트 문법
    1) const 하위컴포넌트 = (props) => {}
       props.속성

    2) 비구조화할당
       const 하위컴포넌트 = ({속성1, 속성2}) => {}
       속성1, 속성2
  */

    // let temp = prompt('음료의 온도를 골라주세요. (아이스/핫)');
    let temp = '아이스';
    let price = 5800;      
    
    // Example2
    let teamName = prompt("당신의 팀 이름은?");

  return (
    <div className="App">
      <h1>메뉴판</h1>

      {/* componenets는 대문자로 써주어야 함! */}
      <MenuBox name="민트초코" temp ={temp} price={price}></MenuBox>
      <MenuBox name="히비스커스차" temp ={temp} price={price}></MenuBox>


      {/* Example
      1) Member 라는 이름의 컴포넌트 파일을 생성하자. (components 폴더 안에)
        - 팀 이름
        - 내 이름이 포함되어 있을 것
      2) App.js 에서 Member 컴포넌트를 띄워보자
      3) Member를 두 번 반복시켜보자
      */}
      <Member></Member>
      <Member></Member>


      {/* Example 2
      팀원들의 이름이 담긴 Member컴포넌트를 작성해보자.
      1) 사용자에게 "당신의 팀 이름은?"  => 입력한 값으로 팀 이름
      2) 나머지는 본인의 팀원 이름으로 세팅되도록
      */}

      <Member2 name='모현정' teamName={teamName}></Member2>
      <Member2 name='조유민' teamName={teamName}></Member2>
      <Member2 name='김준' teamName={teamName}></Member2>
      <Member2 name='최수빈' teamName={teamName}></Member2>
      <Member2 name='이반석' teamName={teamName}></Member2>
      
    </div>
  );
}

export default App;
