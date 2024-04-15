import React, {useContext, useState} from 'react'
import { ColorContext } from '../../example/Ex10';

const ColorResult = () => {

  const data = useContext(ColorContext);
  const [color, setColor] = useState('red');

  return (
    <div>
           <div style={{
            width:'100px', 
            height:'100px',
            backgroundColor:()=>{data.changeColor()}
        }}></div>
        
    </div>
  )
}

export default ColorResult