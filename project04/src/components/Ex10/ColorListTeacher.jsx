import React, { useContext } from 'react'
import { ColorContext } from '../../context/ColorContext';

const ColorListTeacher = () => {

    /** 내가 반복되는 컴포넌트를 만들어야한다. 
        특정값을 제외하고 나머지가 반복이 된다?
        ==> 나머지 값들을 배열로 만든 다음, 그 배열로 map 함수를 사용한다 */

    let color = ['red', 'orange', 'yellow', 'green', 'blue'];

    const { setChoiceColor }= useContext(ColorContext)
  
  return (
    <div style={{display:'flex'}}>

        {color.map(item => 
            <div 
            onClick={()=>{setChoiceColor(item)}}
            key={item}
            style={{
                width : '100px', 
                height : '100px', 
                backgroundColor : item
            }}></div>        
        )}


    </div>
  )
}

export default ColorListTeacher