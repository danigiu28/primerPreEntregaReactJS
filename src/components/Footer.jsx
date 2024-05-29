import logoFooter from "../assets/images/logoFooter.png";

const Footer = () => {
    return (
        <div className="container-fluid"style={{ backgroundColor: "#D96704" }}>
            <div className="row mt-5 p-3" >
                <div className="col textoFooter text-white text-center">
                    <img src={logoFooter} alt="logo pikabu, un zorrito sonriendo" style={{ width: 100, height: 100 }} className="mb-2" />
                    <h5><b>«He aquí mi secreto, que no puede ser más simple: solo con el corazón se puede ver bien; lo esencial es invisible a los ojos»</b></h5>
                </div>
            </div>
            <div className="row">
                <div className="col textoFooter text-white text-center">
                    <p>Copyright © Pikabú Ropa Infantil - 2024. Todos los derechos reservados.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;