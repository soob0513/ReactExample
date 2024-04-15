import React, {useContext} from 'react'
import { NumContext } from '../../example/Ex11';

const Left03 = () => {
    
    // useContext : 공유 저장소에 접근 가능
    // 공유 저장소로부터 데이터 꺼내기
    /*
    {
        num : num, 
        setNum : setNum
    }
    */
    const data = useContext(NumContext);

  return (
    <div>
        <span>{data.num}</span>
    </div>
  )
}

export default Left03