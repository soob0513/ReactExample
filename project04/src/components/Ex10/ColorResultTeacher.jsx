import React, {useContext} from 'react';
import { ColorContext } from '../../context/ColorContext';

const ColorResultTeacher = () => {
    const { choiceColor } = useContext(ColorContext);
  return (
    <div>
        <div>
          <div style={{
            width:'100px',
            height:'100px',
            backgroundColor: choiceColor
          }}></div>
    </div>
    </div>
  )
}

export default ColorResultTeacher