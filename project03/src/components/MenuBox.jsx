 const MenuBox = (props) => {     // 함수 만들기 (선물 포장)
    
    console.log('menu props', props)
    return(
      <div>
        <p>{props.temp} {props.name}</p>
        <p>{props.price}원</p>
      </div>
    )
 }   

 export default MenuBox ;   // 건네주기