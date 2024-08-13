import { NavLink } from 'react-router-dom'
import CartWidget from '../Cart/CartWidget'
import CategoryList from '../JSON/CategoryList.json'

const NavBar = () => {

    const categories = CategoryList.categories.map( (category) => 
            <li key={category.name}>
                <NavLink to={`/category/${category.url}`} >
                    {category.name}
                </NavLink>
            </li>
    )

    return (
        <nav className="flex justify-around gap-2">
            <NavLink to="/">Inicio</NavLink>
            <ul className="flex gap-5">
                {categories}
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar