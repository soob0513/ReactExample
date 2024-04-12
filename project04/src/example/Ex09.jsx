import React, { useState } from 'react'
import Ex09Sub from '../components/Ex09Sub'

const Ex09 = () => {

    /** 
     * 부모요소 => 자식요소에게 값을 전달? props
     * 자식요소 => 부모요소에게 값을 전달? 불가, props를 이용한 꼼수 사용
     */

    const [pText, setPText]= useState('')
    
    /** Ex09.jsx(상위)에서 사용하는 함수 */
    const changeData = ()=>{
        console.log('change Data')
    }

  return (
    <div>
        <h1>컴포넌트끼리 값 전달을 해보자!</h1>
        <p>
            <span>1-1. 상위에서 입력 :</span>
            <input type='text' onChange={(e)=>{
                // console.log('onChange', e.target.value)  // innerText : 태그와 태그 사이 텍스트만 
                                                         // value : input 태그 안의 값
                setPText(e.target.value)
            }}/>
        </p>

        {/* 하위 컴포넌트 */}
        <Ex09Sub text={pText} changeData={changeData}/>

        <p>
            <span>2-2. 상위에서 입력받은 값은 어쩌고저쩌고입니다.</span>
        </p>
    </div>
  )
}

export default Ex09