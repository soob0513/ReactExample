import React from 'react'

const ColorList = () => {
  /* 1차 시도
    const square = useRef();
    const color = ['red', 'orange', 'yellow', 'green', 'blue']
    const dataEl = color.map(data=>square.backgroundColor='{data}')
     
    const colors = [
      {num: 1, style: 'red'},
      {num:2, style:'orange'},
      {num:3, style:'yellow'},
      {num:4, style:'green'},
      {num:5, style:'blue'}
    ]*/
    // const [colors, setColors] = useState([{
    //     num: 1, 
    //     style:'red'
    // }]);
    // const newColors = [...colors]
    
    // let idx = colors.findIndex(item=>item.num == colors.num)

    /*
    setColors([...colors, {
        idx : colors.length+1,
        color : colorArr[idx]
    }]);
    */
    /*
    const colorList = colors.map(()=> <div key='idx' style={{
        width:'100px',
        height:'100px',
        backgroundColor:'{colors.style}'
    }}></div>)
    */
    /*
    const [colors, setColors] = useState([
      {num: 1, style: 'red'},
      {num:2, style:'orange'},
      {num:3, style:'yellow'},
      {num:4, style:'green'},
      {num:5, style:'blue'}
    ]); */
    /* 
    const [colors, setColors] = useState([]);
    setColors([
      {num: 1, style: 'red'},
      {num:2, style:'orange'},
      {num:3, style:'yellow'},
      {num:4, style:'green'},
      {num:5, style:'blue'}
    ]) 
    => Too many re-renders. */  
    
    const colors = ['red', 'orange', 'yellow', 'green', 'blue']

  return (
    <div>
        {/* <div style={{
            width:'100px', 
            height:'100px',
            backgroundColor:'red'
        }}></div> */}
        {/* {colors.map((item)=>(
            <div key={item.num} display='inline' style={{
                width:'100px',
                height:'100px',
                backgroundColor:'{colors.style}'
            }}>

            </div>
        ))} */}
          {/* {colors.map((color)=>(
            <div style={{
                width:'100px',
                height:'100px',
                backgroundColor:'{color}',
                display:'flex'
            }}>
              </div>
        ))} */}
        {colors.map((color, index)=> (
          <div key={index} style={{
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