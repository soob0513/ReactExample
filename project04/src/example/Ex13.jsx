import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../App.css'

const Ex13 = () => {

    /** 
     * 화면에 실시간으로 날씨를 띄워보자. 
     * 
     * 1) 단톡에 올라온 주소로 url을 선언하자
     * 2) 화면이 렌더링된 직후, 해당 url에 비동기적 통신을 해서 데이터를 가져오자. 
     *     - useEffect, axios
     * 3) 데이터를 가져오는데 성공했다면, 해당 데이터들을 화면에 반영시켜보자. 
     *     - 기온 : 켈빈온도 -273 => 섭씨온도
     *     - 구름 : 0~30 맑음 / 31~60 : 약간 흐림 / 61~ : 흐림
     * 4) 다 된 사람들은 단톡방에 완료 체크 후, 디자인 자유롭게~
     *     - 디자인까지 완료된 사람들은 단톡방에 캡쳐해서 업로드
     * 
     * warning!!
     * (1) import 하기 ★제발~ 
     * (2) 데이터를 꼭 console에 천천히, 한 단계씩 출력해보고 접근하기
     */
    
    const [city, setCity] = useState('');
    const [nowTemp, setNowTemp] = useState(0);
    const [feelTemp, setFeelTemp] = useState(0);
    const [clouds, setClouds] = useState('☀');

    useEffect(()=>{
        let url = 'https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=603aa562f93c1b6e5fb4e7596aa820d5';

        axios
        .get(url)
        .then(res=>{setCity(res.data.name)})

        axios.get(url).then(res=>{setNowTemp(Math.round(res.data.main.temp-273))})

        axios.get(url).then(res=>{setFeelTemp(Math.round(res.data.main.feels_like-273))})

        axios.get(url).then(res=>{setClouds(res.data.clouds.all)})

    })

  return (
    <div className='weather'>
        <h1>🌞오늘의 날씨는?</h1>
        <p>🌏도시 : {city}</p>
        <p>
            <span>🌡현재 기온은 {nowTemp}°C 입니다.🌡 </span>
            <br/>
            <span>🌡체감 기온은 {feelTemp}°C 입니다.🌡 </span>
            <br/>
            <br/>
            <span>{clouds <=30? '☀ 맑음': clouds <= 60? '⛅ 약간 흐림': '☁ 흐림'}</span>
        </p>
    </div>
  )
}

export default Ex13