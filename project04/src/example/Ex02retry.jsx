import React, {useState} from 'react'
import '../App.css'

const Ex02retry = () => {
  let pic = "http://localhost:3000/img/No.0147.jpg"

  const [emoji, setEmoji] = useState('♡');
  const [txt, setTxt] = useState('좋아요');
  const handleLike = () => {
    if (emoji == '♡'){
        setEmoji('♥');
        setTxt('좋아요 취소');
    }else {
        setEmoji('♡');
        setTxt('좋아요');
    }
  }
  return (
    <div className="div-center">
        <img width='300px' src={pic}></img>
        
        <p>
            <span onClick={handleLike}>{emoji}</span>
            {"  "}
            <span onClick={handleLike}>{txt}</span>
        </p>
    </div>
  )
}

export default Ex02retry