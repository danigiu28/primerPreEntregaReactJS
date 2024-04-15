import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container-fluid">
            <div className="row p-3" style={{backgroundColor:"#D96704"} } >
                <div className="col"></div>
                <div className="col-md text-center">
                    <a className="navbar-brand" href="#">
                        <img className="rounded-circle" src="https://i.ibb.co/sv9TVqz/logo-encabezado.webp" alt="logo pikabu, zorrito tapandose los ojos con sus manos" width={225} height={225} loading="eager" />
                    </a>
                </div>
                <div className="col d-flex align-items-end justify-content-end">
                    <CartWidget />
                </div>
            </div>
            <div className="row my-3">
                <div className="col">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link text-dark-emphasis text-uppercase" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark-emphasis text-uppercase" href="#">Catálogo</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark-emphasis text-uppercase" href="#">Noticias</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark-emphasis text-uppercase" href="#">Contacto</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark-emphasis text-uppercase" href="#">Sobre Mí</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default NavBar;