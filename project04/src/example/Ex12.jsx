import React, { useEffect, useState } from 'react'
import axios from 'axios'; 

const Ex12 = () => {

  // 1. 가장 처음 실행되는 부분
  // 변수, state, 함수 등 화면에서 사용할 가능성이 있는 요소들 초기화
  // use~ 로 시작하는 모든 기능들(React hook)은 이곳에서 선언
  console.log('1번 실행');

  const [movieList, setMovieList]= useState([]);


  // 3. useEffect(()=>{},[])
  // - 화면을 세팅한 직후 실행 ex) 네이버 홈화면 광고
  // - 복잡하고 무거운 값들을 이곳에서 불러와 줄 것
  // - backend에서 보내주는 값, DB값, 외부에서 가져온 API 값 ...
  useEffect(()=>{
    console.log('3번 실행 - 화면 렌더링 완료 직후');

    // useEffect에는 가지고 오는데 오래 걸리는 값들을 호출한다.
    // 왜? 사용자 입장에서는 화면이 아예 안 뜨는 것보다 순차적으로 뜨는 것을 더 빠르다고 느낌
    //  ==> 그렇기 때문에 빨리 띄울 수 있는 것은 먼저 띄우고, 그 다음에 무거운 작업을 하는 것
    
    // js에서 ajax를 활용해 영화 데이터 가져왔듯,
    // 영화 진흥 위원회 데이터를 화면에 띄워보자.
    let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20240401`;



    // Axios : 비동기통신 라이브러리 (정교한 작업 가능) 
    /*  1) axios 설치 : npm i axios 
            - ctrl+C로 서버 닫고 설치 후 다시 npm start
        2) import axios from 'axios' 
        3) axios
            .통신방식(주소)
            .then(함수)
            .catch(함수) => 가져오는데 실패했다면? 오류를 띄워줌
    */
    
    // [STEP 1] : 데이터 확인
    axios          // axios 라는 라이브러리를 이용해서 비동기통신을 하겠다.
    .get(url)      // get 방식으로 데이터를 가져오겠다. 
    .then(res => {console.log(res)})   // then : 가져오는 데에 성공을 했으면 함수 실행 
    
    // [STEP 2] : 영화 이름만 가져오기
    axios
    .get(url)
    .then(res => {console.log(res.data.boxOfficeResult.dailyBoxOfficeList)})

    // [STEP 3] : 화면에 띄우려면 변수에 넣어줘야하는데, 화면에 띄워야하니까 state로!
    axios
    .get(url)
    .then(res => {setMovieList(res.data.boxOfficeResult.dailyBoxOfficeList)})

    // console.log('movieList', movieList)  <-- 잘 담겼는지 확인 후 주석처리


  },[])  // 첫번째 인자에는 함수, 두번째 인자에는 빈 배열이 들어감
  


  // 4. useEffect(()=>{},[변화를 감지할 대상])
  // - [] 안에 작성한 값이 바뀔 때마다, 함수가 실행
  // - useEffect(()=>{},[num])
  // --> num의 값이 바뀔 때마다 useEffect 함수가 실행된다.

  return (
    <div>
        {console.log('2번 실행 - 화면 렌더링 중...')}
        <h2>영화 순위</h2>
        {movieList.map(item =>
            <p>{item.movieNm}</p>
        )}
    </div>
  )
}

export default Ex12