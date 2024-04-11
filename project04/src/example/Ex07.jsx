import React, {useState, useRef} from 'react'

const Ex07 = () => {

  const inputRef = useRef();

  // DB에서 가져온 정보
  let array = ['큐브', '초밥', '짜장면', '냉면', '돈까스']
  const [data, setData] = useState(['큐브', '초밥', '짜장면', '냉면', '돈까스']);
  
  function addData() {
    // 1. 입력받은 데이터를 가져오기!
    // 2. 가져온 데이터를 array에 추가!
    // setInputText(inputRef.current.value);
    // array.push(inputText);
    // console.log(array);

    // 선생님
    // array.push(inputRef.current.value);

    // setData(data.push(inputRef.current.value));
    // --> state로 만들어진 배열에는 push or pop 사용 불가
    // --> state로 만들어진 배열에 데이터를 추가할 때는 concat을 사용해야 한다!

    // push --> 기존 배열에 데이터를 추가 --> 기존 배열이 바뀐다
    // concat --> 기존 배열에 데이터를 추가해서 --> 새로운 배열을 생성한다 --> 기존 배열은 안 바뀐다
    setData(data.concat(inputRef.current.value));
  }
  function deleteData(){
    // data.pop();
    // filter 함수 : 배열에 조건을 줘서 새로운 배열을 만들어주는 함수
    // array.filter((배열의 요소, 인덱스)=> 조건);   --> 조건에 맞는 것만 남겨둔다 (조건에 맞지 않는 것 삭제)
    setData(data.filter((dataEl, index)=>index != data.length-1));
  }
  

  return (
    <div>
        <input ref={inputRef}></input>
        <button onClick={addData}>추가</button>
        <button onClick={deleteData}>마지막 데이터 삭제</button>
        <ul>
            {/* for문 사용하면 좋지만 for문 사용 불가
            <li>큐브</li>  
            <li>{array[0]}</li>
            <li>초밥</li>
            <li>{array[1]}</li>
            <li>짜장면</li>
            <li>냉면</li>
            <li>돈까스</li> */}

            {/* 
                map() : 배열 안에 있는 요소들을 특정 규칙에 맞게끔 바꿔서 새로운 배열을 만들어주는 함수
            */}
            {/* data : 배열에 있는 요소 */}
            {/* {array.map((data)=><li>{data}</li>)} */}
            {data.map((dataEl)=><li>{dataEl}</li>)}

        {/* 
            array = ['큐브', '초밥', '짜장면', '냉면', '돈까스']
            array.map = [<li>큐브</li>, 
                         <li>초밥</li>, 
                         <li>짜장면</li>, 
                         <li>냉면</li>, 
                         <li>돈까스</li>]
        */}
        </ul>
    </div>
  )
}

export default Ex07