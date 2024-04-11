import React, {useState} from 'react'
import '../App.css'

// 파일 경로의 ./ 는 현재경로를 의미 => jsx 파일에서는 index.html(화면에 최종적으로 띄우는 파일) 기준!

// 화면에 띄워줘야 하는 변수는 state를 사용하고 화면에 띄워주는 것과 관련이 없으면 일반변수 사용
let uScore = 0;  // 리렌더링이 계속 실행되지 않도록
let cScore = 0;

const Ex04선생님 = () => {
    // let comDice = 1;
    // --> 일반 변수는 값이 바뀔 때 화면에 적용이 안된다!!
    const [comDice, setComDice] = useState(1);   // 초기값 안 넣으면 안됨
    // --> state 변수는 값이 바뀔 때 화면에 적용이 된다!!
    // set함수가 실행이 된다 --> 재렌더링 된다 (state 제외)
    const [userDice, setUserDice] = useState(1);
    const [comScore, setComScore] = useState(0);
    const [userScore, setUserScore] = useState(0);
    
    // 승자 state
    const [win, setWin] = useState('');


  function startCk() {
    // 이미지를 랜덤하게 바꿔줘야한다!!
    // comDice = parseInt(Math.random()*6)+1;
    // console.log(comDice);
    // setComDice(parseInt(Math.random()*6)+1);
    // setUserDice(parseInt(Math.random()*6)+1);
    let comRan = parseInt(Math.random()*6)+1;
    let userRan = parseInt(Math.random()*6)+1;
    
    // state를 if문에 사용하면 안 됨. (∵state는 제일 마지막에 실행됨)
    if (userRan > comRan){
        setUserScore(userScore+1);
        uScore++
    }
    else if (comRan > userRan){
        setComScore(comScore+1);
        cScore++
    }
    
    if (uScore == 10){
        setWin('사용자');
    }
    else if (cScore == 10){
        setWin('컴퓨터');
    }
  }
  return (
    <div>
      <h1>DICE GAME</h1>
      <button onClick={startCk}>Start</button>

      <div className="dice">
        <img src={"./img/dice"+comDice+".png"}></img>  {/*{}의 의미는 js에서 가져와서 사용하겠다!는 의미*/}
        <h1>Com Score : {comScore}</h1>
      </div>
      <div className="dice">
        <img src={"./img/dice"+userDice+".png"}></img>
        <h1>User Score : {userScore}</h1>
      </div>

      <h1>결과 : {win+"가 이겼습니다"}</h1>
    </div>
  )
}

export default Ex04선생님