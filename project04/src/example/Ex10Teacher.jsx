import React, {useState}  from 'react'
import ColorList from '../components/Ex10/ColorListTeacher';
import ColorResult from '../components/Ex10/ColorResultTeacher';
import { ColorContext } from '../context/ColorContext';
// context 폴더 안 ColorContext라는 js 파일 새로 만들었음

const Ex10Teacher = () => {
    // 내가 전역적으로 사용해줄 State를 정의 (Provider가 있는 위치에서 정의)
    const [choiceColor, setChoiceColor] = useState('red'); // 돈이 있어야 입금가능

  return (
    <div>
        <h1>색상 변경하기</h1>
        <ColorContext.Provider value={{choiceColor, setChoiceColor}}>  {/** 비구조화 할당 */}
          <p>원하는 색상을 클릭하세요. </p>
          <ColorList/>
          <hr/>
          <p>선택하신 색상입니다.</p>
          <ColorResult/>
        </ColorContext.Provider>
    </div>
  )
}

export default Ex10Teacher