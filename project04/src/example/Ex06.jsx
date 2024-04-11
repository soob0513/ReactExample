import React, {useState, useRef} from 'react'

// useRef : 태그를 선택하는 기능
const Ex06 = () => {

  const inputRef = useRef();
  const [inputText, setInputText] = useState('');

  function getData(e){
    // e. target.value
    // 리액트에서 document.querySelector('input') or getElementByOOOO
    // --> 으로 태그를 찾아오는 것은 권장하지 않는다!!
    // document.querySelector('input').value

    // inputRef.current : inputRef가 가리키는 태그를 의미
    // --> inputRef.current.value
    setInputText(inputRef.current.value)
    }
  return (
    <div>
        <h1>Input 태그 다루기</h1>
        {/* 
        e : 이벤트 객체 (이벤트의 전반적인 내용 전부)
        이벤트 : 사용자가 웹 브라우저에서 DOM 요소들과 상호 작용하는 것
        e.target : 이벤트를 발생시킨 주체
        e.target.value : input태그에 적은 값
        */}
        {/* <input onChange={(e)=>setInputText(e.target.value)}></input> */}\
        {/* ref = {inputRef}  inputRef라는 변수를 input태그에 대응시키겠다 */}
        {/* <input onChange={getData} ref={inputRef}></input>
        <button>출력</button>
        <h1>{inputText}</h1> */}

        {/* 출력버튼을 누르면 밑에 나오도록 */}
        <input ref={inputRef}></input>
        <button onClick={getData}>출력</button>
        <h1>{inputText}</h1>

    </div>
  )
}

export default Ex06