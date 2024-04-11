import React, {useState, useRef} from 'react'


const Ex08 = () => {
    const inputRef = useRef();
    const [data, setData] = useState([]);

    function addData() {
        setData(data.concat(inputRef.current.value));
        inputRef.current.value = '';   // --> input 태그 안 내용 초기화
    }
    function deleteData(i) {
        // 수빈 (안됨)
        // console.log("e"+e.target.index);
        // console.log(data.indexOf(e.target.value));
        // setData(data.filter((dataEl, index)=>index != data.indexOf(e.target.value)));
        // console.log(data);

        // 준씨
        setdata(data.filter((dataLs, index) => index !== i));
    }
    
  return (
    <div>
        <h1>2024 올해는 꼭 해봅시다!!</h1>
        <input ref={inputRef}></input>
        <button onClick={addData}>계획추가</button>

        <h1>ToDo_List</h1>
        <ul>
            {/* 수빈 (X)
            {data.map((dataEl)=><li>{dataEl}   <button onClick={deleteData}>삭제</button></li>)} */}
            {/* 준 */}
            {data.map((dataLs, index) => (<li>{dataLs}<button onClick={() => delData(index)}>삭제</button></li>))}
        </ul>

    </div>
  )
}

export default Ex08