// import React from 'react'

// const Member2 = (props) => {
//         console.log('member props', props);
//     return (
//       <div>
//           <p>{props.teamName}</p>
//           <p>{props.name}</p>
//       </div>
//     )
//   }
  
//   export default Member2


import React from 'react'

/* 
우리는 기존에 props 라는 객체를 받아와서, props 안에 있는 속성값을 꺼내서 사용을 했는데
-> props <- 앞에 붙어서 반복되는게 귀찮음
=> 비구조화할당!!
=> 객체 안에 있는 값을 추출해서 변수로 바로 선언해줄 수 있는 개념

▶ props라는 객체 대신, 안에 있는 속성을 꺼내서 사용
기존 : (props)
        props.name  <- 호출

바뀐 문법 : ({name, team})
        name <- 호출

*/

const Member2 = ({name, teamName}) => {
  return (
    <div>
        <p>{teamName}</p>
        <p>{name}</p>
    </div>
  )
}

export default Member2