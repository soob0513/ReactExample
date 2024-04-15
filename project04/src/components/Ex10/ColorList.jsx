import React,{useContext, useState} from 'react'
import { ColorContext } from '../../example/Ex10';

const ColorList = () => {

  const colors = ['red', 'orange', 'yellow', 'green', 'blue']
  const data = useContext(ColorContext);

  const changeColor = ()=> {
    data.setColor(color)
  }

  return (
    <div>
        {colors.map((color, index)=> (
          <div onClick={()=>changeColor(color)} key={index} style={{
            width:'100px',
            height:'100px',
            backgroundColor:color,
            display:'inline-block'   /** display :'flex' */
        }}></div>
        ))}
    </div>
  )
}

export default ColorList