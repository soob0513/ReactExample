import React,{useContext} from 'react'
import { ColorContextM } from '../../example/Ex10';

const ColorResult = () => {

  const data = useContext(ColorContextM);

  return (
    <div style={{
        width:'100px',
        height:'100px',
        backgroundColor:data.color
    }}></div>
  )
}

export default ColorResult