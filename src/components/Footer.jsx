import logoFooter from "../assets/images/logoFooter.png";

const Footer = () => {
    return (
        <div className="container-fluid text-white mt-5 p-3" style={{ backgroundColor: "#D96704"}}>
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 text-center">
                    <img src={logoFooter} alt="logo pikabu, un zorrito sonriendo" style={{ width: "100px", height: "100px" }} className="mb-2" />
                    <h5><b>«He aquí mi secreto, que no puede ser más simple: solo con el corazón se puede ver bien; lo esencial es invisible a los ojos»</b></h5>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <p>Derechos de autor © Pikabú Ropa Infantil - 2024. Todos los derechos reservados.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;