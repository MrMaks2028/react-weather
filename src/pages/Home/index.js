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

            {(state.cod) ? <h3>{Math.round(state.main.temp - 273.15)} &deg;C</h3> : ''}

        </div>
    )
}