import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = ({list}) => {

  let { num } = useParams();
  console.log('클릭한 상품의 번호', num);

  console.log('detail에 받아온 list', list.find(item =>item.no == num));
  const [obj, setObj] = useState({});

  useEffect(()=>{
    setObj(list.find(item => item.no == num))
  },[list])

  console.log('obj',obj);

  return (
    <div className='list-container'>
      <div className='detail-item'>
        <img src={obj.src} width='250px'/>
        <h3>{obj.title}</h3>
        <p>
          <span>가격 : {obj.price}</span>{" "}

          {obj.delivery == "free"
          ? <span>배송비 무료</span>
          : <span>배송비 {obj.delivery}</span>
          }
        </p>
      </div>
    </div>
  )
}

export default ProductDetail