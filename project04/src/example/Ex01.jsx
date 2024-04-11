import React, {useState} from 'react'   
import '../App.css'

const Ex01 = () => {

  /* Ex01 학습목표!
  1) 리액트에서 Evetn 객체를 사용해보자.
  2) 왜 우리는 리액트에서 변수를 사용할 수 없는지 알아보자.
  3) 변수를 대체해서 state를 사용해보자.
  */


  /* React Event
  1. html 요소 안에 onClick : camel Case로 작성
  2. onclick={함수} 이 때, 함수 뒤에 ()는 붙이지 않는다.
    --> 컴포넌트가 계속 렌더링 중인데, 함수()는 호출의 의미라서 끊임없이 호출되어버림
  3. 이 때, 함수는 별도로 만든 함수여도 O, 안에 바로 함수를 넣는 것도 O
    - {increase} (O)
    - {()=>{console.log('function)}} (O) / 매개변수를 이용할 때
  4. DOM 요소 안에만 이벤트를 설정할 수 있다. 
    - 내가 직접 만든 컴포넌트에는 활용 불가
    - 컴포넌트 안 div 태그 내에 작성해야함
  */

  // 변수 : 값은 변하지만 화면에 렌더링되지 않는다. (화면에 반영X)
  let num = 0; 

  // state : 컴포넌트 내부에서 관리되는 변경 가능한 데이터
  //        -> 변수와의 차이점 : 값이 변하면 화면에 렌더링된다. 
  //        -> 리액트에서 변수는 state로 사용해야함(∵화면에 보여줘야 하니까)
  // const [state이름, 그 state를 변경시키는 함수] = useState(초기값)
  //       - state 이름 : 변수처럼 활용 가능(num)
  //       - 대부분 set + state 이름을 붙임 (setNum)


  // [state 사용 순서]
  // 1. useState를 import 해온다. (비구조화할당 => {}안에 적어야함)

  // 2. state를 선언한다.
  const [num2, setNum2] = useState(0);
  
  // 3. state의 값을 변경한다.
  // state를 변경시키는 함수(변경할 값)
  // setNum2(num2+1)


  /** 숫자를 1씩 증가시키는 함수 */     // --> 함수 바로 위에 /** */ 주석 사용하면 함수에 설명뜸
  const increase = ()=>{
    console.log('increase function');
    num += 1;
    setNum2(num2+1);  // --> 클로저 함수 (함수 제일 마지막에 실행시키겠습니다!)
    // console.log(num2);   --> 바뀐 값 출력 안 됨!
    //// 이때 setNum2가 실행됨
  }
  /** 숫자를 1씩 감소시키는 함수 */
  const decrease = ()=>{
    console.log('decrease function');
    setNum2(num2-1);
  }
  return (
    <div className='div-center'>
      <h1>{num2}</h1>
      <button onClick={increase}>+1</button>   
      <button onClick={decrease}>-1</button>   
    </div>
  )
}

export default Ex01