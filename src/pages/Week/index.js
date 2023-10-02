import { useState } from "react";
import Navigation from "../../components/navigation"
import Form from "../../components/navigation/Form"

const API_key = 'c667f611e51bd8611b875197e08375be';

export default function Week() {
    const [state, setState] = useState({});

    function search(city) {
        console.log(city);
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_key}&lang=ru`)
        .then(response => response.json())
        .then(data => {
            fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${data[0]['lat']}&lon=${data[0]['lon']}&cnt=7&appid=${API_key}&lang=ru`)
            .then(response => response.json())
            .then(data => setState(data));
        });
    }

    return (
        <div>
            <Navigation />
            <h1>Прогноз на неделю</h1>
            <Form searchHandler={search} />

            {(state.cod) ? <h1>{state.city.name}</h1> : ''}
        
            <div class="order">
                <div class="weather">
                    <div>{(state.cod) ? <h2>1st day</h2> : ''}</div>
                    <div>{(state.cod) ? <h3>{state.list[0].weather[0].main}: {state.list[0].weather[0].description}</h3> : ''}</div>
                    <div>{(state.cod) ? <img src={`${`https://openweathermap.org/img/wn/${state.list[0].weather[0].icon}@2x.png`}`}></img> : ''}</div>
                    <div>{(state.cod) ? <h3>Температура: <span id="temp">{Math.round(state.list[0].main.temp - 273.15)} &deg;C</span></h3> : ''}</div>
                    <div>{(state.cod) ? <h3>Скорость ветра: <span id="wind">{Math.round(state.list[0].wind.speed)} М/С</span></h3> : ''}</div>
                    <div>{(state.cod) ? <h3>Атмосферное давление: <span id="pressure">{state.list[0].main.pressure} гПа</span></h3> : ''}</div>
                </div>

                <div class="weather">
                    <div>{(state.cod) ? <h2>2nd day</h2> : ''}</div>
                    <div>{(state.cod) ? <h3>{state.list[1].weather[0].main}: {state.list[1].weather[0].description}</h3> : ''}</div>
                    <div>{(state.cod) ? <img src={`${`https://openweathermap.org/img/wn/${state.list[1].weather[0].icon}@2x.png`}`}></img> : ''}</div>
                    <div>{(state.cod) ? <h3>Температура: <span id="temp">{Math.round(state.list[1].main.temp - 273.15)} &deg;C</span></h3> : ''}</div>
                    <div>{(state.cod) ? <h3>Скорость ветра: <span id="wind">{Math.round(state.list[1].wind.speed)} М/С</span></h3> : ''}</div>
                    <div>{(state.cod) ? <h3>Атмосферное давление: <span id="pressure">{state.list[1].main.pressure} гПа</span></h3> : ''}</div>
                </div>

                <div class="weather">
                    <div>{(state.cod) ? <h2>3rd day</h2> : ''}</div>
                    <div>{(state.cod) ? <h3>{state.list[2].weather[0].main}: {state.list[2].weather[0].description}</h3> : ''}</div>
                    <div>{(state.cod) ? <img src={`${`https://openweathermap.org/img/wn/${state.list[2].weather[0].icon}@2x.png`}`}></img> : ''}</div>
                    <div>{(state.cod) ? <h3>Температура: <span id="temp">{Math.round(state.list[2].main.temp - 273.15)} &deg;C</span></h3> : ''}</div>
                    <div>{(state.cod) ? <h3>Скорость ветра: <span id="wind">{Math.round(state.list[2].wind.speed)} М/С</span></h3> : ''}</div>
                    <div>{(state.cod) ? <h3>Атмосферное давление: <span id="pressure">{state.list[2].main.pressure} гПа</span></h3> : ''}</div>
                </div>

                <div class="weather">
                    <div>{(state.cod) ? <h2>4th day</h2> : ''}</div>
                    <div>{(state.cod) ? <h3>{state.list[3].weather[0].main}: {state.list[3].weather[0].description}</h3> : ''}</div>
                    <div>{(state.cod) ? <img src={`${`https://openweathermap.org/img/wn/${state.list[3].weather[0].icon}@2x.png`}`}></img> : ''}</div>
                    <div>{(state.cod) ? <h3>Температура: <span id="temp">{Math.round(state.list[3].main.temp - 273.15)} &deg;C</span></h3> : ''}</div>
                    <div>{(state.cod) ? <h3>Скорость ветра: <span id="wind">{Math.round(state.list[3].wind.speed)} М/С</span></h3> : ''}</div>
                    <div>{(state.cod) ? <h3>Атмосферное давление: <span id="pressure">{state.list[3].main.pressure} гПа</span></h3> : ''}</div>
                </div>

                <div class="weather">
                    <div>{(state.cod) ? <h2>5th day</h2> : ''}</div>
                    <div>{(state.cod) ? <h3>{state.list[4].weather[0].main}: {state.list[4].weather[0].description}</h3> : ''}</div>
                    <div>{(state.cod) ? <img src={`${`https://openweathermap.org/img/wn/${state.list[4].weather[0].icon}@2x.png`}`}></img> : ''}</div>
                    <div>{(state.cod) ? <h3>Температура: <span id="temp">{Math.round(state.list[4].main.temp - 273.15)} &deg;C</span></h3> : ''}</div>
                    <div>{(state.cod) ? <h3>Скорость ветра: <span id="wind">{Math.round(state.list[4].wind.speed)} М/С</span></h3> : ''}</div>
                    <div>{(state.cod) ? <h3>Атмосферное давление: <span id="pressure">{state.list[4].main.pressure} гПа</span></h3> : ''}</div>
                </div>

                <div class="weather">
                    <div>{(state.cod) ? <h2>6th day</h2> : ''}</div>
                    <div>{(state.cod) ? <h3>{state.list[5].weather[0].main}: {state.list[5].weather[0].description}</h3> : ''}</div>
                    <div>{(state.cod) ? <img src={`${`https://openweathermap.org/img/wn/${state.list[5].weather[0].icon}@2x.png`}`}></img> : ''}</div>
                    <div>{(state.cod) ? <h3>Температура: <span id="temp">{Math.round(state.list[5].main.temp - 273.15)} &deg;C</span></h3> : ''}</div>
                    <div>{(state.cod) ? <h3>Скорость ветра: <span id="wind">{Math.round(state.list[5].wind.speed)} М/С</span></h3> : ''}</div>
                    <div>{(state.cod) ? <h3>Атмосферное давление: <span id="pressure">{state.list[5].main.pressure} гПа</span></h3> : ''}</div>
                </div>

                <div class="weather">
                    <div>{(state.cod) ? <h2>7th day</h2> : ''}</div>
                    <div>{(state.cod) ? <h3>{state.list[6].weather[0].main}: {state.list[6].weather[0].description}</h3> : ''}</div>
                    <div>{(state.cod) ? <img src={`${`https://openweathermap.org/img/wn/${state.list[6].weather[0].icon}@2x.png`}`}></img> : ''}</div>
                    <div>{(state.cod) ? <h3>Температура: <span id="temp">{Math.round(state.list[6].main.temp - 273.15)} &deg;C</span></h3> : ''}</div>
                    <div>{(state.cod) ? <h3>Скорость ветра: <span id="wind">{Math.round(state.list[6].wind.speed)} М/С</span></h3> : ''}</div>
                    <div>{(state.cod) ? <h3>Атмосферное давление: <span id="pressure">{state.list[6].main.pressure} гПа</span></h3> : ''}</div>        
                </div>

            </div>
        </div>
    )
}