import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header-container'>
        <div className='link-container'>
            {/* 로고 */}
            <Link to='/'>
                BonVoyage
            </Link>
        </div>
        <div className='link-container'>
            <Link to="/list">
                상품리스트
            </Link>
        </div>
        <div>로그인 회원가입</div>
    </div>
  )
}

export default Header