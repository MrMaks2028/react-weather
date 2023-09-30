import { useState } from "react";
import Navigation from "../../components/navigation"
import Form from "../../components/navigation/Form"

const API_key = 'c667f611e51bd8611b875197e08375be';

export default function Home() {
    const [state, setState] = useState({});

    function search(city) {
        console.log(city);
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_key}`)
        .then(response => response.json())
        .then(data => {
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0]['lat']}&lon=${data[0]['lon']}&appid=${API_key}`)
            .then(response => response.json())
            .then(data => setState(data));
        });
    }

    return (
        <div>
            <Navigation />
            <h1>Прогноз на сегодня</h1>
            <Form searchHandler={search} />

            <div class="weather">
                <div>{(state.cod) ? <h2>1st day</h2> : ''}</div>
                <div>{(state.cod) ? <h3>{state.weather[0].main}: {state.weather[0].description}</h3> : ''}</div>
                <div>{(state.cod) ? <img src={`${`https://openweathermap.org/img/wn/${state.weather[0].icon}@2x.png`}`}></img> : ''}</div>
                <div>{(state.cod) ? <h3>Температура: <span id="temp">{Math.round(state.main.temp - 273.15)} &deg;C</span></h3> : ''}</div>
                <div>{(state.cod) ? <h3>Скорость ветра: <span id="wind">{Math.round(state.wind.speed)} M/S</span></h3> : ''}</div>
                <div>{(state.cod) ? <h3>Атмосферное давление: <span id="pressure">{state.main.pressure} hPa</span></h3> : ''}</div>
            </div>

        </div>
    )
}