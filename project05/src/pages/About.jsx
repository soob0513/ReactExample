import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
        <h2>글 목록</h2>
        <hr/>
        <Link to="/product/1?best=true">정보처리기사 스터디 하실 분 구합니다!</Link>
        <hr/>
        <Link to="/product/2">토익 스터디 구합니다. </Link>
        <hr/>
        <Link to="/product/3?">SQLD 스터디 구합니다. </Link>
        <hr/>


    </div>
  )
}

export default About