import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

const Ex13Teacher = () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=paris&appid=603aa562f93c1b6e5fb4e7596aa820d5`;

    const [city, setCity] = useState('');
    const [temp, setTemp] = useState(0);
    const [feelsLike, setFeelsLike] = useState(0);
    const [cloud, setCloud] = useState('');

    useEffect(()=>{
        axios.get(url)
        .then(res => {

            console.log(res.data)  // 데이터 확인용

            setCity(res.data.name)       // 도시의 이름
            setTemp(parseInt(res.data.main.temp-273))  // 현재 온도
            setFeelsLike(parseInt(res.data.main.feels_like-273))  // 체감 온도
            
            setCloud(res.data.clouds.all)   // 구름의 양
            if (res.data.clouds.all <= 30){
                setCloud('☀ 맑음')
            }else if(res.data.clouds.all <= 60){
                setCloud('⛅ 약간 흐림')
            }else {
                setCloud('☁ 흐림')
            }
            
        });
    },[])
  return (
    <div>
        <h1>🌞오늘의 날씨는?</h1>
        <p>🌏도시 : {city}</p>
        <p>
            <span>🌡현재 기온은 {temp}°C 입니다. 🌡 </span>
            <br/>
            <span>🌡체감 기온 : {feelsLike}°C 입니다. 🌡 </span>
            <br/>
            <br/>
            <span>{cloud}</span>
        </p>
    </div>
  )
}

export default Ex13Teacher