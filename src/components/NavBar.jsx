import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container-fluid">
            <div className="row p-3" style={{backgroundColor:"#D96704"} } >
                <div className="col"></div>
                <div className="col-md text-center">
                    <Link className="navbar-brand" to={"/"}>
                        <img className="rounded-circle" src="https://i.ibb.co/sv9TVqz/logo-encabezado.webp" alt="logo pikabu, zorrito tapandose los ojos con sus manos" width={225} height={225} loading="eager" />
                    </Link>
                </div>
                <div className="col d-flex align-items-end justify-content-end">
                    <CartWidget />
                </div>
            </div>
            <div className="row my-3">
                <div className="col">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark-emphasis text-uppercase" to={"/"}>Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark-emphasis text-uppercase" to={"/category/newborn"}>Recién Nacido</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark-emphasis text-uppercase" to={"/category/niña"}>Niña</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark-emphasis text-uppercase" to={"/category/niño"}>Niño</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark-emphasis text-uppercase" to={"/category/accesorios"}>Accesorios</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default NavBar;