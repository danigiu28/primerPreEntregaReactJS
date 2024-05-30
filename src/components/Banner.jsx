import { Link } from "react-router-dom";
import bannerNewBorn from "../assets/images/bannerNewBorn.jpg"
import bannerNinia from "../assets/images/bannerNinia.jpg";
import bannerNinio from "../assets/images/bannerNinio.jpg";
import bannerAccesorios from "../assets/images/bannerAccesorios.jpg";

const Banner = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-3 d-flex align-items-center justify-content-center" style={{ backgroundImage: `url(${bannerNewBorn})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", opacity: 0.9, height: "20rem" }}>
                    <Link to={"/category/newborn"} className="text-decoration-none">
                        <span className="bg-white text-uppercase px-3 py-2" style={{ color: "#D96704" }}>Recién Nacido</span>
                    </Link>
                </div>

                <div className="col-12 col-md-3 d-flex align-items-center justify-content-center" style={{ backgroundImage: `url(${bannerNinia})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", opacity: 0.9, height: "20rem" }}>
                    <Link to={"/category/ninia"} className="text-decoration-none">
                        <span className="bg-white text-uppercase px-3 py-2" style={{ color: "#D96704" }}>Niña</span>
                    </Link>
                </div>

                <div className="col-12 col-md-3 d-flex align-items-center justify-content-center" style={{ backgroundImage: `url(${bannerNinio})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", opacity: 0.9, height: "20rem" }}>
                    <Link to={"/category/ninio"} className="text-decoration-none">
                        <span className="bg-white text-uppercase px-3 py-2" style={{ color: "#D96704" }}>Niño</span>
                    </Link>
                </div>

                <div className="col-12 col-md-3 d-flex align-items-center justify-content-center" style={{ backgroundImage: `url(${bannerAccesorios})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", opacity: 0.9, height: "20rem" }}>
                    <Link to={"/category/accesorios"} className="text-decoration-none">
                        <span className="bg-white text-uppercase px-3 py-2" style={{ color: "#D96704" }}>Accesorios</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Banner;