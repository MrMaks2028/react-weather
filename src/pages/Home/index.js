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
            <h1>Home page</h1>
            <Form searchHandler={search} />

            {(state.cod) ? <h2>{state.name}</h2> : ''}
            {(state.cod) ? <h2>{state.weather[0].main}: {state.weather[0].description}</h2> : ''}
            {(state.cod) ? <img src={`${`https://openweathermap.org/img/wn/${state.weather[0].icon}@2x.png`}`}></img> : ''}
            {(state.cod) ? <h3>temp: {Math.round(state.main.temp - 273.15)} &deg;C</h3> : ''}
            {(state.cod) ? <h3>wind speed: {Math.round(state.wind.speed)} M/S</h3> : ''}

        </div>
    )
}