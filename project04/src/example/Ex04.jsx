import React, {useState} from 'react';
import '../App.css';

let comScore = 0;
let userScore = 0;
let comNum = 0;
let userNum = 0;
let result = '';
const Ex04 = () => {

//   const [comNum, setComNum] = useState();
//   const [userNum, setUserNum] = useState();
   const pic = ["./img/dice1.png",
    "./img/dice2.png",
    "./img/dice3.png",
    "./img/dice4.png",
    "./img/dice5.png",
    "./img/dice6.png"] 
//   const [result, setResult] = useState();
  const [comPic, setComPic] = useState("./img/dice1.png");
  const [userPic, setUserPic] = useState("./img/dice1.png");
//   const [comScore, setComScore] = useState(0);
//   const [userScore, setUserScore] = useState(0);
  

  const btnCk = () => {
    comNum = parseInt(Math.random()*6);
    userNum = parseInt(Math.random()*6);

    setComPic(pic[comNum]);
    setUserPic(pic[userNum]);
    // setComPic('./img/dice'+ comNum +'.png');
    // setUserPic('./img/dice'+ userNum +'.png');
    console.log(pic[comNum]);
    console.log(pic[userNum]);
  }
  if (comNum > userNum) {
    comScore = comScore + 1
  }else if (comNum < userNum) {
    userScore = userScore +1
  }
  
  if (comScore >= 10){
    result = "COM WIN!";
  }else if (userScore >= 10){
    result = "USER WIN!!";
  }

  return (
    <div>
      <h1>DICE GAME</h1>
      <button onClick={btnCk}>Start</button>

      <div className="dice">
        <img src={comPic}></img>
        <h1>Com Score : {comScore}</h1>
      </div>
      <div className="dice">
        <img src={userPic}></img>
        <h1>User Score : {userScore}</h1>
      </div>

      <h1>결과 : {result}</h1>
    </div>
  )
}

export default Ex04