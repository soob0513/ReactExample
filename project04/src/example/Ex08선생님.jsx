import React, {useState, useRef, useEffect} from 'react'

const Ex08선생님 = () => {

    const inputRef = useRef();

    /*
    todos 배열
    todo(객체) 
     - content : 내용
     - completed : 완료여부 (T/F)
     - num : 글의 고유 번호
    */
  const [todos, setTodos] = useState([{      // 초기값은 객체! => 중괄호{} 사용
    content : "물 마시기",
    completed : false,
    num : 1
  }])   

  /** 스프레드 문법 (spread)
   * ...객체 : 객체를 새로 만들어 값을 넣어주는 복사를 진행
   */

  /** todos 리스트 내에 새로운 todo를 추가하는 것 */
  const handleNewTodoAdd =()=>{
    console.log('새로운 todo:', inputRef.current.value)
    setTodos([...todos, {
        content : inputRef.current.value,
        completed : false,
        num : todos.length+1    // 프로젝트 때에는 6자리 코드 생성기로 작성해야함 (고유한 번호여야해서)
    }])

    inputRef.current.value = "";
  }

  /** 체크 버튼을 클릭했을 때, 할 일을 완료 상태로 바꾸고 밑줄을 그어준다. */
  const handleTodocompleted = (num)=>{
    console.log('completed function', num)

    const newTodos = [...todos]   // todos의 복사본을 만들어놓음 => todos를 사용했던 부분을 newTodos로 변경 => setTodos(newTodos)
                                  // 데이터 손상 방지
    
    let idx = newTodos.findIndex(item => item.num == num);  
    console.log('idx', idx);

    newTodos[idx].completed = !newTodos[idx].completed   // 다시 체크하면 풀리도록 하려면 반대의 값(t/f)으로 두어야함
    setTodos(newTodos)
  }

  /** 선택한 todo를 삭제하는 함수 */
  const handleTodoDelete = (num)=>{
    console.log('delete function', num)

    const newTodos = [...todos]

    let idx = newTodos.findIndex(item => item.num == num);
    console.log('delete index :', idx)

    // 배열함수 : splice (원본 배열에 새로운 요소를 추가하거나, 삭제하거나, 교체한 배열을 반환하는 함수)
    // 배열.splice(변경을시작할idx, 제거할 수(개), 추가할 내용)

    newTodos.splice(idx, 1)
    setTodos(newTodos)
  }
  
  useEffect(()=>{
    inputRef.current.focus();
  },[])


  return (
    <div>
        <h1>2024 올해는 꼭 해봅시다╰(*°▽°*)╯</h1>
        <input type='text' ref={inputRef}></input>
        <button onClick={handleNewTodoAdd}>계획추가</button>

        <h1>ToDo_List</h1>
        <ul>
            {todos.map((item)=>(
                <li key={item.num}>   {/* input과 label 이 서로에게 영향을 줄 수 있도록 li 태그로 묶어줌 */}
                {/* 인덱스로 키값을 설정하지 않는 이유는 데이터 삭제되면 인덱스 번호가 계속 새로 바뀌기 때문. */}
                    <input type='checkbox' onChange={()=>{handleTodocompleted(item.num)}}></input>  {/* 함수 안에 함수를 써주면 무한 루프를 막을 수 있음 */}
                    <label 
                        style={{
                            textDecoration : item.completed ? 'line-through' :'none'
                        }}>
                        <span>{item.content}</span>
                    </label>  
                    <button onClick={()=>{handleTodoDelete(item.num)}}>삭제</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Ex08선생님