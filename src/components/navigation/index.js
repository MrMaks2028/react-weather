import { Link } from "react-router-dom"

export default function Navigation() {
    return (
        <nav>
            <Link to={'/'}>Прогноз на сегодня<br/> </Link>
            <Link to={'/week'}>Прогноз на неделю </Link>
        </nav>
    )
}