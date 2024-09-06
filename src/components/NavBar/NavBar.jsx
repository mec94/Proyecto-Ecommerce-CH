// REACT
import { Link } from "react-router-dom";

// COMPONENTES...
import { CartWidget } from '../CartWidget/CartWidget'

// ESTILOS...
import '../NavBar/NavBar.css'

// ************************************************
export const NavBar = () => {
  return (

    <header >

      <Link to="/" className="logo">
        <img src="/img/logo-celuhouse.png" alt="Logo" />
      </Link>

      <nav className="navbar">

        <Link to="/category/pantallas">Pantallas</Link>
        <Link to="/category/baterias">Baterias</Link>
        <Link to="/category/cables">Cables</Link>
        <Link to="/category/sensores">Sensores</Link>
        <Link to="/category/camaras">Cámaras</Link>

        <CartWidget />

      </nav>

    </header>

  )
}
// ************************************************