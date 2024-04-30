import { Link } from "react-router-dom"

const Error404 = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <img src={"https://i.ibb.co/bPcxtTm/pngtree-fox-with-404-error-illustration-vector-on-white-background-png-image-2083003.webp"} className="img-fluid" alt="Error 404 - Página no encontrada" />
                </div>
                <div className="col text-center">
                    <h1>- Error 404 -</h1>
                    <h2>La página no se encuentra disponible</h2>
                    <p className="my-5"><Link to={"/"} className="btn text-white" style={{backgroundColor:"#D96704"}}>Volver a la Página de Inicio</Link> </p>

                </div>
            </div>
        </div>
    )
}

export default Error404;