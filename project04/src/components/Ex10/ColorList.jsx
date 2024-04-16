import React,{useContext} from 'react'
import { ColorContextM } from '../../example/Ex10';


const ColorList = () => {

  const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
  const data = useContext(ColorContextM);

  const changeColor = (color)=> {
    data.setColor(color);
  };
  
  return (
     
     <div>
         {colors.map((color, index)=> (
           <div onClick={()=>changeColor(color)} key={index} style={{
             width:'100px',
             height:'100px',
             backgroundColor:color,
             display:'inline-block'   
         }}></div>
         ))}
     </div>
  )
}

export default ColorList