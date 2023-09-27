import { useState } from "react"

export default function Form(props) {
    const [city, changeCity] = useState('');

    function search() {
        props.searchHandler(city);
    }

    return (
        <div>
            <input type="text" value={city} onChange={(e) => changeCity(e.target.value)}/>
            <button onClick={search}>OK</button>
        </div>
    )
}