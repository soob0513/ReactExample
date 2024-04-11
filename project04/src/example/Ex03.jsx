import React, {useState} from 'react'
import '../App.css'

const Ex03 = () => {

    // 랜덤게임을 만들어 보자!
    // 랜덤하게 컴퓨터가 생성해주는 숫자 : ranNum state 생성
    // 내가 누른 버튼의 숫자 : inputNum state 생성
    // 버튼을 눌렀을 때 실행할 함수 : btnCk 함수 생성

    // STEP 1) 랜덤할 숫자를 뽑아준다 => ranNum에 적용
    // STEP 2) 사용자가 누른 버튼의 내용을 감지해서 inputNum에 적용
    // STEP 3) ranNum 와 inputNum을 비교해서, 같다면 "정답입니다~" / 아니라면 "땡!"


    /*
    const btnCk = (e) =>{
        console.log('btn ck function');
        // 랜덤 숫자
        console.log('ranNum', parseInt(Math.random()*3)+1); // Math.random() => 0~1 까지만 나옴
        // 내가 선택한 숫자
        console.log('inputNum', e.target.innerText);
    }
    */

    const [ranNum, setRanNum] = useState('');
    const [inputNum, setInputNum] = useState('');
    // const [ranNum, setRanNum] = useState();  (O)
    // const [ranNum, setRanNum] = useState(0);  (O)
    
    const btnCk = (e) => {
        setRanNum(parseInt(Math.random()*3)+1);
        setInputNum(e.target.innerText);
    }

  return (
    <div className="div-center">
        <h1>🎮 랜덤게임 🎮</h1>
        <div>
            <button onClick={btnCk}>1</button>
            <button onClick={btnCk}>2</button>
            <button onClick={btnCk}>3</button>
        </div>

        <div>
            <span>내가 누른 숫자 : {inputNum}</span>
            <br/>
            <span>컴퓨터 숫자 : {ranNum}</span>
            <br/>

            {/* ranNum과 inputNum을 비교하는 것은 이곳에서 할 것 => 삼항연산자 */}
            <span>{ranNum === inputNum? "🎉🎉정답입니다🎉🎉":"오답입니다😥"}</span>
            {/* {ranNum === inputNum}? <span>🎉🎉정답입니다🎉🎉</span>: <span>오답입니다😥</span>; */}
        </div>
    </div>
  )
}

export default Ex03