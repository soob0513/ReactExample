import React, {createContext, useState} from 'react'
import Left01 from '../components/Ex11/Left01'
import Right01 from '../components/Ex11/Right01'

// 공유 저장 공간 생성 --> createContext
export const NumContext = createContext();

const Ex11 = () => {
    // num이라는 state를 --> Left03에서 출력
    const [num, setNum] = useState(0);

  return (
    <div>
        <h1>Context API 사용하기!</h1>
        {/* 
        NumContext.Provider : 하위 컴포넌트가 공유값을 사용할 수 있도록 허용하겠습니다
        value : 실제로 공유 되어질 값
        */}
        <NumContext.Provider value={{num : num, setNum : setNum}}>  {/* {{}} : 자바스크립트에서 객체를 받아오겠다 */}
            <Left01/>
            <Right01/>
        </NumContext.Provider>

        <button onClick={()=>{setNum(num+1)}}>Ex11Plus</button>
        
    </div>
  )
}

export default Ex11