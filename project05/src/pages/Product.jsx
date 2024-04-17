import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const Product = () => {

    /** useParams 
     *   - url의 파라미터 정보를 가져올 수 있다. 
     *   - 물품의 고유한 값을 설정/출력하는데 적합
     *   - useParams는 하나밖에 사용할 수 없다. 
     *     즉, 그 컴포넌트가 가지고 있는 고유한 성질을 담을 때 유용하게 사용된다. 
     *   - 상품의 고유번호 / 회원 고유 번호 / 학번 / 사번 
     * 
     * 사용 방법
     * a. <Route path="/경로:파라미터정보">
     * b. 컴포넌트 내부로 와서
     *    let { 파라미터정보 } = useParams(); 
     * 
     * 
     * /301145 파라미터 -> 301145가 상품 번호인 상품의 정보를 가져와주자
     *  => 그 정보를 이 곳에 세팅 
     * 
     */

    let { num } = useParams();
    console.log('게시물 번호', num);


    /** useSearchParams()
     *  - 라우터 사용 시 QueryString 정보를 가져와서 관리하고 싶을 때 사용
     *  - url 뒤에 ?속성=값&속성=값 ... 
     *  - 사용 방법은 굉장히 다양하다! 
     *  - 들어온 경로 파악 / 검색 기능 파악 / 인기글, 신규글 카테고리화, .... etc  
     */

    const [query, setQuery] = useSearchParams();   // 무조건 query로 사용하기. state랑 헷갈리니까. 
    console.log('인기글 여부 파악', query.get('best'));

  return (
    <div>
        {num}번째 게시물 입니다.  
    </div>
  )
}

export default Product